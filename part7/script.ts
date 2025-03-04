const getrandomInit = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}


abstract class GameObject {
    protected position: { x: number; y: number };
    abstract update(): void

    constructor(x: number, y: number) {
        this.position = { x, y }
    }
}

class Player extends GameObject {
    constructor(x: number, y: number) {
        super(x, y)
    }
    get x(): number {
        return this.position.x
    }
    update() {
        this.position.x++
        console.log(this.position);
    }
}

class NPC extends GameObject {
    constructor(x: number, y: number) {
        super(x, y)
    }

    get y(): number {
        return this.position.y
    }

    update() {
        this.position.y++
        console.log(this.position);
    }
}

interface Weapon {
    attack(): void
}

interface Enchantable {
    enchant(enchantment: string): void
}

class EnchantedBow implements Weapon, EnchantedBow {
    private _enchantment: string
    attack() {
        console.log(`Shoots from an enchanted bow: ${this._enchantment}`);
    }
    enchant(enchantment: string) {
        this._enchantment = enchantment
    }
    constructor(enchantment: string) {
        this._enchantment = enchantment
    }
}

class BasicSword implements Weapon {
    attack(): void {
        console.log('Attacks with a basic sword.');
    }
}

function performAttack(weapon: Weapon): void {
    weapon.attack()
}

const movePlayer: HTMLButtonElement | null = document.querySelector('.movePlayer')
const moveNPC: HTMLButtonElement | null = document.querySelector('.moveNPC')
const attackbow: HTMLButtonElement | null = document.querySelector('.attackbow')
const attacksword: HTMLButtonElement | null = document.querySelector('.attacksword')
const playerx: HTMLSpanElement | null = document.querySelector('#playerx')
const npcy: HTMLSpanElement | null = document.querySelector('#npcy')

const doomguy = new Player(getrandomInit(2, 12), getrandomInit(2, 12))
const Imp = new NPC(getrandomInit(2, 12), getrandomInit(2, 12))
const shotgun = new EnchantedBow("Demon Rock")
const crucible = new BasicSword

if (playerx) {
    playerx.innerHTML = `x: ${doomguy.x}, y:0`
}

if (npcy) {
    npcy.innerHTML = `x: 0, y:${Imp.y}`
}

movePlayer?.addEventListener('click', () => {
    doomguy.update()
    if (playerx) {
        playerx.innerHTML = `x: ${doomguy.x}, y:0`
    }
})
moveNPC?.addEventListener('click', () => {
    Imp.update()
    if (npcy) {
        npcy.innerHTML = `x: 0, y:${Imp.y}`
    }
})

attackbow?.addEventListener('click' ,() => {
    shotgun.attack()
})

attacksword?.addEventListener('click' ,() => {
    crucible.attack()
})
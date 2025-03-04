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

    update() {
        this.position.x++
        console.log(this.position);
    }
}

class NPC extends GameObject {
    constructor(x: number, y: number) {
        super(x, y)
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
}

class BasicSword implements Weapon {
    attack(): void {
        console.log('Attacks with a basic sword.');
    }
}

function performAttack(weapon: Weapon): void {
    weapon.attack()
}
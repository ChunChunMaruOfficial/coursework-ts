const getrandomInit = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

interface Weapon {
    _name: string
    _damage: number
}

interface Inventory {
    addItem(item: simpleItem): void
    removeItem(item: simpleItem): void
}

abstract class simpleItem {
    abstract _name: string
    use(): string {
        return 'potion used'
    }
}

class PlayerInventory implements Inventory {
    _pieces: simpleItem[] = []
    addItem(item: simpleItem): void {
        this._pieces = [...this._pieces, item]
    }
    removeItem(item: simpleItem): void {
        this._pieces = this._pieces.filter(v => v != item)
    }
}

class HealthPotion extends simpleItem {
    _name: string
    constructor(name: string) {
        super()
        this._name = name
    }

    get name():string{
        return this._name
    }
}

class ManaPotion extends simpleItem {
    _name: string
    constructor(name: string) {
        super()
        this._name = name
    }
    get name(): string {
        return this._name
    }
}

abstract class simpleCharacter {
    protected _name: string
    protected _health: number

    abstract attack(): string

    get health(): number {
        return this._health
    }

    get name(): string {
        return this._name
    }
}

class Warrior extends simpleCharacter {
    _name: string
    _health: number
    constructor(name: string) {
        super()
        this._name = name
        this._health = 100
    }
    attack(): string {
        return `"Warrior ${this._name} attacks with ${getrandomInit(15, 25)}"`
    }
}

class Mage extends simpleCharacter {
    _name: string
    _health: number
    constructor(name: string) {
        super()
        this._name = name
        this._health = 100
    }
    attack(): string {
        return `"Mage ${this._name} uses a spell on ${getrandomInit(20, 35)}"`
    }
}

class Player {
    private _name: string
    private _health: number

    constructor(name: string) {
        this._name = name
        this._health = 100
    }

    takeDamage(damage: number): string {
        let text = ''
        this._health -= damage
        text = this._health < 0 ? 'Player is dead' : `Player still has ${this._health} HP`
        return text
    }

    get health(): number {
        return this._health
    }
    set health(health: number) {
        this._health -= health
    }
    get name(): string {
        return this._name
    }
}

class Sword implements Weapon {
    _name: string
    _damage: number
    _length: number
    constructor(name: string) {
        this._name = name
        this._damage = getrandomInit(1, 12)
        this._length = getrandomInit(5, 15)
    }
    get name():string{
        return this._name
    }

    get length():number{
        return this._length
    }
}

const performAttack = (character: simpleCharacter) => {
    console.log(character.attack());
}

const piku = new Warrior('Piku')
const niku = new Mage('Niku')

performAttack(piku)
performAttack(niku)

const Link = new Player('Link')
console.log(Link.takeDamage(74));
console.log(Link.health);
console.log(Link.takeDamage(37));
const excalibur = new Sword('chunchun')

const healthpotion = new HealthPotion('firstpotion')
const manapotion = new ManaPotion('secondpotion')

console.log(healthpotion.use())
console.log(manapotion.use())

/* ---------------------------------- FRONT ---------------------------------- */

const componentsarray: string[] = ['Players', 'Warriors', 'Mages', 'Swords', 'HealthPotions', 'ManaPotions']

const aside = document.querySelector('aside')

if (aside) {
    componentsarray.forEach(v => {
        const div = document.createElement('div')
        const h1 = document.createElement('h1')
        h1.innerHTML = v
        div.classList.add(v)
        div.appendChild(h1)
        aside.appendChild(div)
    })
}

let Playersarray: Player[] = []

document.querySelector('.createaplayer')?.addEventListener('click', () => {
    const playername: HTMLInputElement | null = document.querySelector('.playername')
    if (playername) {
        if (!playername.value) {
            alert('enter a players name')
            return 0
        } else {
            
            const Alan = new Player(playername.value)
            Playersarray = [...Playersarray, Alan]
            const players = document.querySelector('.Players')
            if (players) {
                players.innerHTML += `<span><p>🕹️ ${Alan.name} - ${Alan.health}</p><button>take damage</button></span>`

                document.querySelectorAll('.Players>span').forEach((v, i) => {
                    const btn = v.querySelector('button');
                    if (btn) {
                        btn.addEventListener('click', () => {
                            Playersarray[i].health = getrandomInit(5, 15)
                            Playersarray[i].health > 0 ?
                                v.children[0].innerHTML = `<p>🕹️ ${Playersarray[i].name} - ${Playersarray[i].health}</p>` :
                                v.children[0].innerHTML = `<p>😞 ${Playersarray[i].name} is dead</p>`
                        });
                    }
                });
            }
            playername.value = ''
        }
    }
})

let Warriorsarray: Warrior[] = []

document.querySelector('.createawarrior')?.addEventListener('click', () => {
    const warriorname: HTMLInputElement | null = document.querySelector('.warriorname')
    if (warriorname) {
        if (!warriorname.value) {
            alert('enter a warriors name')
            return 0
        } else {
            const Djo = new Warrior(warriorname.value)
            Warriorsarray = [...Warriorsarray, Djo]
            const warriors = document.querySelector('.Warriors')
            if (warriors) {
                warriors.innerHTML += `<span><p>🛡️ ${Djo.name} - ${Djo.health}</p></span>`
            }
            warriorname.value = ''
        }
    }
})

let Magesarray: Mage[] = []

document.querySelector('.createamage')?.addEventListener('click', () => {
    const magename: HTMLInputElement | null = document.querySelector('.magename')
    if (magename) {
        if (!magename.value) {
            alert('enter a mage name')
            return 0
        } else {
            const Megumin = new Mage(magename.value)
            Magesarray = [...Magesarray, Megumin]
            const mages = document.querySelector('.Mages')
            if (mages) {
                mages.innerHTML += `<span><p>🧝‍♂️ ${Megumin.name} - ${Megumin.health}</p></span>`
            }
            magename.value = ''
        }
    }
})

let Swordsarray: Sword[] = []

document.querySelector('.createsword')?.addEventListener('click', () => {
    const swordname: HTMLInputElement | null = document.querySelector('.swordname')
    if (swordname) {
        if (!swordname.value) {
            alert('enter a sword name')
            return 0
        } else {
            const ChunChun = new Sword(swordname.value)
            Swordsarray = [...Swordsarray, ChunChun]
            const swords = document.querySelector('.Swords')
            if (swords) {
                swords.innerHTML += `<span><p>⚔️ ${ChunChun.name} - ${ChunChun.length}</p></span>`
            }
            swordname.value = ''
        }
    }
})

let HealthPotionsarray: HealthPotion[] = []

document.querySelector('.createhealth')?.addEventListener('click', () => {
    const healthname: HTMLInputElement | null = document.querySelector('.healthname')
    if (healthname) {
        if (!healthname.value) {
            alert('enter a Health Potion name')
            return 0
        } else {
            const HP = new HealthPotion(healthname.value)
            HealthPotionsarray = [...HealthPotionsarray, HP]
            const healthPotions = document.querySelector('.HealthPotions')
            if (healthPotions) {
                healthPotions.innerHTML += `<span><p>❤️‍🩹 - ${HP.name}}</p></span>`
            }
            healthname.value = ''
        }
    }
})

let ManaPotionsarray: ManaPotion[] = []

document.querySelector('.createmana')?.addEventListener('click', () => {
    const mananame: HTMLInputElement | null = document.querySelector('.mananame')
    if (mananame) {
        if (!mananame.value) {
            alert('enter a Mana Potion name')
            return 0
        } else {
            const Mana = new ManaPotion(mananame.value)
            ManaPotionsarray = [...ManaPotionsarray, Mana]
            const manaPotions = document.querySelector('.ManaPotions')
            if (manaPotions) {
                manaPotions.innerHTML += `<span><p>✨ ${Mana.name}}</p></span>`
            }
            mananame.value = ''
        }
    }
})
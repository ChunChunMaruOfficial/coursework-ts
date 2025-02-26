const getrandomInit = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

interface Weapon {
    _name: string
    _damage: number
}

interface Inventory{
    addItem(item: simpleItem):void
    removeItem(item: simpleItem):void
}

abstract class simpleItem{
    abstract _name: string
    use():string{
        return 'potion used'
    }
}

class PlayerInventory implements Inventory{
    _pieces: simpleItem[] = []
    addItem(item: simpleItem):void{
        this._pieces = [...this._pieces,item]
    }
    removeItem(item: simpleItem):void{
        this._pieces = this._pieces.filter(v => v!= item)
    }
}


class HealthPotion extends simpleItem{
    _name: string
    constructor(name: string) {
        super()
        this._name = name
    }
}

class ManaPotion extends simpleItem{
    _name: string
    constructor(name: string) {
        super()
        this._name = name
    }
}

abstract class simpleCharacter {
    abstract _name: string
    abstract _health: number

    abstract attack(): string
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
        return `"Warrior ${this._name} attacks with ${getrandomInit(15, 25)}`
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
        return `"Mage ${this._name} uses a spell on ${getrandomInit(20, 35)}`
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
        text = this._health < 0 ? 'Player is death' : `Player still has ${this._health} HP`
        return text
    }

    get health():number{
        return this._health
    }
    get name():string{
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
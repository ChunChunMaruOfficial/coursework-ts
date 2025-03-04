const getrandomInit = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

class Character {
    private _name: string
    private _health: number
    private _attack: number
    inventory: Item[]
    constructor(name: string, health: number, attack: number) {
        this._name = name
        this._health = health
        this._attack = attack
    }

    get name(): string {
        return this._name
    }
    get health(): number {
        return this._health
    }
    get attack(): number {
        return this._attack
    }

    toString(): string {
        return `${this._name} has a ${this._health} HP, attack with ${this._attack}`
    }

    addItemToInventory(item: Item): void {
        this.inventory = [...this.inventory, item]
        console.log(this.inventory);
    }
    calculateDamage(): number {
        return getrandomInit(0, this._attack)
    }
    healCharacter(n: number): void {
        this._health = this._health + n > 100 ? 100 : this._health + n
    }
}

const checkInventory = (character: Character, itemType: string): boolean => {
    return character.inventory.some(v => v.type == itemType)
}

class Item {
    private _name: string
    private _type: string
    private _power: number

    constructor(name: string, type: string, power: number) {
        this._name = name
        this._type = type
        this._power = power
    }

    get type(): string {
        return this._type
    }
    get name(): string {
        return this._name
    }
    get power(): number {
        return this._power
    }

}

const characters: Character[] = [];
const items: Item[] = [];
const reserve: HTMLDivElement | null = document.querySelector('.reserve')

function createCharacter() {
    const name: HTMLInputElement | null = document.querySelector('#charName');
    const health: HTMLInputElement | null = document.querySelector('#charHealth')
    const attack: HTMLInputElement | null = document.querySelector('#charAttack')
    if (name && health && attack && reserve) {
        const newCharacter = new Character(name.value, Number(health.value), Number(attack.value));
        characters.push(newCharacter);
        reserve.innerHTML += `
        <div>
        <h5>Character</h5>
        <h3>${newCharacter.name}</h3>
            <p>health: ${newCharacter.health} HP</p>
            <p>attack: ${newCharacter.attack} </p>
        </div>`
        console.log(`Character Created: ${newCharacter.toString()}`);
    }
}

function createItem() {
    const name: HTMLInputElement | null = document.querySelector('#itemName');
    const type: HTMLInputElement | null = document.querySelector('#itemType');
    const power: HTMLInputElement | null = document.querySelector('#itemPower')
    if (name && type && power && reserve) {
        const newItem = new Item(name.value, type.value, Number(power.value));
        items.push(newItem);

        reserve.innerHTML += `
        <div>
        <h5>Item</h5>
        <h3>${newItem.name}</h3>
            <p>type: ${newItem.type}</p>
            <p>power: ${newItem.power} </p>
        </div>`
        console.log(`Item Created: ${newItem.name}`);
    }
}


function addItemToCharacter() {
    const charName: HTMLInputElement | null = document.querySelector('#charToAdd');
    const itemName: HTMLInputElement | null = document.querySelector('#itemToAdd');
    let character: Character | null = null
    for (let i = 0; i < characters.length; i++) {
        charName?.value == characters[i].name ? character = characters[i] : ''
    }
    let item: Item | null = null
    for (let i = 0; i < items.length; i++) {
        itemName?.value == items[i].name ? item = items[i] : ''
    }

    if (character && item) {
        character.addItemToInventory(item);
        console.log(`${itemName} added to ${charName}'s inventory`);
    } else {
        console.log(`Character or item not found`);
    }
}

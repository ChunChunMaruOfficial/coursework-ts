interface Item {
    id: number;
    name: string;
    type: string
}


class Character {
    private _name: string;
    private _health: number;
    private _attack: number;
    constructor(name: string, health: number, attack: number) {
        this._name = name
        this._health = health
        this._attack = attack
    }
}

const Hero: Character = new Character('Link', 20, 69)

const Inventory: Item[] = []
let text: string = ''

for (let i = 0; i < 6; i++) {

    Inventory.push({ id: i, name: `name of ${i}st predmet`, type: `some ${Math.round(i*Math.PI)} type` })
    text += JSON.stringify(Inventory[i], null, '         ')
}
const getItemById = (array, id): string => {
    const result = array.filter(v => v.id == id)
    return JSON.stringify(result[0], null, '   ')
}

const inputeinfach: HTMLInputElement | null = document.querySelector('input');

document.querySelector('#butn')?.addEventListener('click', () => {
    if (inputeinfach) {
        const item = getItemById(Inventory, Number(inputeinfach.value));
        textarea.innerHTML = item ? JSON.stringify(item, null, '   ') : 'Item not found';
    }
});


const textarea = document.createElement('textarea')
textarea.innerHTML += text
document.querySelector('body')?.append(textarea)
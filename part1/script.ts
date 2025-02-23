const GetRandomInit = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

class Human {
    private _i: number
    private _height: number;
    private _sex: string;
    private _weight: number;
    private _social_rating: number;
    private _financial_balance: number;

    constructor(i: number) {
        this._height = GetRandomInit(130, 250)
        this._sex = GetRandomInit(0, 1) === 1 ? 'male' : 'female'
        this._weight = GetRandomInit(40, 200)
        this._social_rating = GetRandomInit(13, 113)
        this._financial_balance = GetRandomInit(-1000, 3364)
        this._i = i
    }

    get financial_balance(): number{
        return this._financial_balance
    }

    toString(): string {
        return `[${this._i}]: this is ${this._sex} creature, weighing ${this._weight} kg, he is ${this._height} cm tall, his social rating is ${this._social_rating}, and he has: ${this._financial_balance}`
    }
}

const array: Human[] = Array(GetRandomInit(5, 15));


for (let i = 0; i < array.length; i++) {
    array[i] = new Human(i)
    const h1 = document.createElement('h5')
    h1.innerHTML += array[i].toString()
    document.body.appendChild(h1)
}

let min:number = 0
let max:number = 0

for (let i = 0; i < array.length; i++) {
    array[i].financial_balance > array[max].financial_balance ? max = i : ''
    array[i].financial_balance < array[min].financial_balance ? min = i : ''   
}

const poorest = document.createElement('p')
poorest.innerHTML += `The poorest: \n${array[min].toString()}`
const richest = document.createElement('p')
richest.innerHTML +=`The richest: \n${array[max].toString()}`
document.body.append(poorest, richest)
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
        this._sex = GetRandomInit(0, 2) === 1 ? 'male' : 'female'
        this._weight = GetRandomInit(40, 200)
        this._social_rating = GetRandomInit(13, 113)
        this._financial_balance = GetRandomInit(-1000, 3364)
        this._i = i
    }

    get financial_balance(): number {
        return this._financial_balance
    }
    get height(): number {
        return this._height
    }
    get weight(): number {
        return this._weight
    }
    get sex(): string {
        return this._sex
    }
    get social_rating(): number {
        return this._social_rating
    }
    set financial_balance(value: number) {
        this._financial_balance = value;
    }

    toString(): string {
        return `[${this._i}]: this is ${this._sex} creature, weighing ${this._weight} kg, he is ${this._height} cm tall, his social rating is ${this._social_rating}, and he has: ${this._financial_balance}`
    }
}

const array: Human[] = Array(GetRandomInit(5, 15));


for (let i = 0; i < array.length; i++) {
    array[i] = new Human(i)
    const h5 = document.createElement('h5')
    h5.innerHTML += array[i].toString()
    document.body.appendChild(h5)
}

let min: number = 0
let max: number = 0

for (let i = 0; i < array.length; i++) {
    array[i].financial_balance > array[max].financial_balance ? max = i : ''
    array[i].financial_balance < array[min].financial_balance ? min = i : ''
}

const poorest = document.createElement('p')
poorest.innerHTML += `<b>The poorest</b>: \n${array[min].toString()}`
const richest = document.createElement('p')
richest.innerHTML += `<b>The richest</b>: \n${array[max].toString()}`
const for_two = document.createElement('p')
for_two.innerHTML += `amount for two: <b>\n${(array[max].financial_balance + array[min].financial_balance) / 2}</b>`

let lowest: number = 0

for (let i = 0; i < array.length; i++) {
    array[i].height < array[lowest].height ? lowest = i : ''
}

const mbi = Math.round(array[lowest].weight / ((array[lowest].height / 100) ** 2))

const lowestman = document.createElement('p')
lowestman.innerHTML += `<b>the lowest</b>: \n${array[lowest].toString()}, his bmi: <b> ${mbi}</b> kg/m²`

let fattest: number = 0
let thinnest: number = 0

for (let i = 0; i < array.length; i++) {
    array[i].weight > array[fattest].weight ? fattest = i : ''
    array[i].weight < array[thinnest].weight ? thinnest = i : ''
}

const thefattest = document.createElement('p')
thefattest.innerHTML += `<b>The fattest</b>: \n${array[fattest].toString()}`
const thethinnest = document.createElement('p')
thethinnest.innerHTML += `<b>The thinnest</b>: \n${array[thinnest].toString()}`
const equally_tall = document.createElement('p')
equally_tall.innerHTML += `they are equally tall: <b>\n${(array[fattest].weight + array[thinnest].weight) / 2}</b> kg`


document.body.append(poorest, richest, for_two, lowestman, thefattest, thethinnest, equally_tall)


for (let i = 0; i < array.length; i++) {
    const header5 = document.createElement('h5')
    header5.innerHTML += `[${i}]: old balance:${array[i].financial_balance}, new balance: `
    array[i].financial_balance = Math.round((array[i].financial_balance * array[i].social_rating) / 13)
    header5.innerHTML += `<b>${array[i].financial_balance}</b>`
    document.body.appendChild(header5)
}

let people: number = 0

for (let i = 0; i < array.length; i++) {
    array[i].sex == 'female' ? people-- : people++
}

const pairs = document.createElement('p')
if (people == 0) {
    pairs.innerHTML += `everyone has a pair🥰🥰🥰`
} else {
const gender:string = people < 0 ? 'female' : 'male'
let redbalance: number = 0
let index:number = 0 


    for (let i = 0; i < array.length; i++) {
console.log(array[i].sex);

        if (array[i].sex == gender){
            redbalance += array[i].financial_balance
            index++
        }

        if (index == Math.abs(people)) break 
    }


    pairs.innerHTML += `there are <b>${Math.abs(people)}</b> ${gender} without a partner😞😞.They will spend the rest of their miserable life alone with <b>$${redbalance}</b> on their balance`
}

document.body.append(pairs)
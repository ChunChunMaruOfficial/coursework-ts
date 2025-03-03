const getrandominit = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

interface Movable {
    move(distance: number): void
    getPosition(): number
}

abstract class Vehicle implements Movable {
    private _position: number

    move(distance: number): void {
        this._position += distance
        console.log(this._position);

    }

    getPosition(): number {
        return this._position
    }

    constructor(position: number) {
        this._position = position
    }
}

class Car extends Vehicle {
    private _model: string

    constructor(model: string, position: number) {
        super(position)
        this._model = model
    }
}

const create: HTMLButtonElement | null = document.querySelector('#create')
const carmodel: HTMLInputElement | null = document.querySelector('#carmodel')
const cardistance: HTMLInputElement | null = document.querySelector('#cardistance')
const carElement: HTMLDivElement | null = document.querySelector('.car')

let autos: Car[] = []

create?.addEventListener('click', () => {
    if (!carmodel?.value) {
        alert('enter a model!!!!')
        return 0
    }
    if (!cardistance?.value) {
        alert('enter a distance!!!!')
        return 0
    }


    const newcar = new Car(carmodel?.value, Number(cardistance?.value))
    autos.push(newcar)
    if (carElement) {

        carElement.innerHTML += `
        <div class="element"> 
        <h3 class="carname">${carmodel?.value}</h3>
        <p class="cardistance">${cardistance?.value} km</p>
                <span><input type="number" placeholder="edit a distance"> <button>confirm a new distance</button></span>
</div>`
    }


    const elements = document.querySelectorAll('.element')


    elements.forEach((v, i) => {
        const buttonel: HTMLButtonElement | null = v.querySelector('span>button');
        const inputel: HTMLInputElement | null = v.querySelector('span>input');
        const cardistanceel: HTMLPreElement | null = v.querySelector('.cardistance');
        if (buttonel && inputel && cardistanceel)
            buttonel.addEventListener('click', () => {
                autos[i].move(Number(inputel.value))
                cardistanceel.innerHTML = `${autos[i].getPosition()} km`
            });
    });





})
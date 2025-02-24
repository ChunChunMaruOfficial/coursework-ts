const products:string[] = ["Телевизор","Ноутбук","Смартфон","Планшет","Клавиатура","Мышь","Наушники","Фитнес-браслет","Умные часы","Внешний жесткий диск","Игровая консоль","Флешка","Принтер","Кофеварка","Тостер","Микроволновка","Стиральная машина","Пылесос","Утюг","Блендер","Миксер","Электрочайник","Фен","Планшет","Пылесос-робот","Настольная лампа","Триммер","Видеокамера","Фотоаппарат","Игровая клавиатура"]


const getRandomInit = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

interface Order {
    _username: string;
    _components: string[]
}

const getUserOrders = () => {
    const productsarray = new Array(getRandomInit(2, 13))
    for (let i = 0; i < productsarray.length; i++) {
        productsarray[i] = products[getRandomInit(0,products.length)]
    }
    return productsarray
}

class User implements Order {
    public _username: string
    public _components: string[]
    private _mail: string
    private _isAdmin: boolean
    constructor(name: string, mail: string) {
        this._username = name
        this._mail = mail
        this._isAdmin = getRandomInit(0, 2) == 1 ? true : false
        this._components = getUserOrders()
    }

    get username(): string {
        return this._username
    }
    get isAdmin(): boolean {
        return this._isAdmin
    }
    get components(): string {
        return this._components.join(', ')
    }

    getAdmins(): User[] {
        let temparray: User[] = []
        for (let i = 0; i < userarray.length; i++) {
            userarray[i].isAdmin && temparray.push(userarray[i])
        }
        return temparray
    }

    toString(): string {
        return `${this._username}, ${this._mail} ${this._isAdmin ? '(Admin)' : ''}`
    }
}

const userarray = new Array(getRandomInit(2, 13))
const info = document.createElement('span')
info.innerHTML = `Encoded usernames:<br>`

for (let i = 0; i < userarray.length; i++) {
    userarray[i] = new User(String(getRandomInit(100, 100000)), String(getRandomInit(100, 100000)))
    info.innerHTML += `<br>${userarray[i].username}`
}

info.innerHTML += `<br><h6>нуда просто цифры вместо имен и чтоооу (⌐■_■)</h6>`

const admins = document.createElement('p')
admins.innerHTML = `Admins:<br>`
const adminsarray = userarray[0].getAdmins()

for (let i = 0; i < adminsarray.length; i++) {
    admins.innerHTML += `<br>${adminsarray[i].toString()}, orders of this admin: ${adminsarray[i].components}`
}

document.querySelector('body')?.append(info, admins)
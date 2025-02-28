const getrandominit = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

/* ---------------------------------- Product ---------------------------------- */

interface Product {
    id: number
    name: string
    price: number
}

const Productarray: Product[] = new Array(getrandominit(5, 12))

for (let i = 0; i < Productarray.length; i++) {
    Productarray[i] = { id: i, name: `Product-${Math.round(i * Math.PI)}`, price: getrandominit(10, 100) }
}

const filterAffordableProducts = (minprice: number): Product[] => {
    const answer: Product[] = Productarray.filter(v => v.price < minprice)
    return answer
}

/* ---------------------------------- Student ---------------------------------- */

interface Student {
    name: string
    grades: number[]
}

let student: Student[] = new Array(getrandominit(5, 12))

const getgrades = (): number[] => {
    let result: number[] = new Array(getrandominit(12, 36))

    for (let i = 0; i < result.length; i++) {
        result[i] = getrandominit(10, 100)
    }
    return result
}

const addStudent = (obj: Student): void => {
    student = [...student, obj]
}

for (let i = 0; i < student.length; i++) {
    student[i] = { name: `Student-${Math.round(i)}.00`, grades: getgrades() }
}

/* ---------------------------------- Car ---------------------------------- */

interface Car {
    make: string
    model: string
    year: number
}

const car: Car = { make: 'nissan', model: 'skyline r34', year: 98 }

const updateCarYear = (obj: Car, newyear: number): void => {
    obj.year = newyear
}

/* ---------------------------------- OrderItem ---------------------------------- */

interface OrderItem {
    productId: number
    quantity: number
}

interface Order {
    orderId: number
    customerName: string
    items: OrderItem[]
}

const orders: Order[] = new Array(getrandominit(5, 12))

const getOrderItemarrray = (): OrderItem[] => {

    const orderItem: OrderItem[] = new Array(getrandominit(5, 12))

    for (let i = 0; i < orderItem.length; i++) {
        orderItem[i] = { productId: i, quantity: getrandominit(0, 100) }
    }
    return orderItem
}

for (let i = 0; i < orders.length; i++) {
    orders[i] = { orderId: i, customerName: `customer-${Math.round(i * Math.PI)}`, items: getOrderItemarrray() }
}

const calculateTotalItems = (orderId: number): number => {
    return orders[orderId].items.length
}

/* ---------------------------------- Employee ---------------------------------- */
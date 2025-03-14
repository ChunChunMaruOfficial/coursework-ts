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

/* ---------------------------------- Employees ---------------------------------- */

interface Employee {
    id: number
    name: string
    department: string
    salary: number
}

let employees: Employee[] = new Array(getrandominit(5, 12))

for (let i = 0; i < employees.length; i++) {
    employees[i] = { id: i, name: `Employee-${Math.round(i * Math.PI)}`, department: `${getrandominit(0, 5)}-st department`, salary: getrandominit(1000, 100000) }
}

const groupByDepartment = (): object => {
    const obj = {}
    for (let i = 0; i < employees.length; i++) {
        if (!obj[employees[i].department]) {
            obj[employees[i].department] = []
        }
        obj[employees[i].department] = [...obj[employees[i].department], employees[i]]
    }
    return obj
}

const render = () => {
    console.log('render called');

    if (group) group.style.display = 'none'
    const employeesElement: HTMLDivElement | null = document.querySelector('.employees')
    const Christobject = groupByDepartment()

    if (employeesElement) {
        employeesElement.innerHTML = ''
    }

    for (let i = 0; i < Object.keys(Christobject).length; i++) {
        let text = ''
        for (let j = 0; j < Christobject[Object.keys(Christobject)[i]].length; j++) {

            text += `
    <div class="employee">
        <p class=".id">Id: <b>${Christobject[Object.keys(Christobject)[i]][j].id}</b></p>
        <p class=".name">Name: <b>${Christobject[Object.keys(Christobject)[i]][j].name}</b></p>
        <p class=".salary">Salary: <b>${Christobject[Object.keys(Christobject)[i]][j].salary}</b></p>
    </div>`
        }

        if (employeesElement) {
            employeesElement.innerHTML += `<div>
                <h2>${Object.keys(Christobject)[i]}</h2>
                ${text}
                </div>`
        }
    }
}


const confirmObject: HTMLButtonElement | null = document.querySelector('#confirm')
const newnameObject: HTMLInputElement | null = document.querySelector('#newname')
const departmentObject: HTMLInputElement | null = document.querySelector('#newdepartment')
const salaryObject: HTMLInputElement | null = document.querySelector('#newsalary')

confirmObject?.addEventListener('click', () => {
    console.log('confirm clicked');

    if (!newnameObject?.value) {
        alert('enter a name!!!!')
        return 0
    }
    if (!departmentObject?.value) {
        alert('enter a department!!!!')
        return 0
    }
    if (!salaryObject?.value) {
        alert('enter a salary!!!!')
        return 0
    }
    employees = [...employees, { id: (employees.length + 1), name: newnameObject?.value, department: departmentObject?.value, salary: Number(salaryObject?.value) }]

    render()
})

const group: HTMLButtonElement | null = document.querySelector('.group')
group?.addEventListener('click', () => render())


/* ---------------------------------- Library ---------------------------------- */


interface Library {
    name: string
    books: { title: string, author: string }[]
}

let library: Library = {
    name: 'small library',
    books: [{ title: "1984", author: "George Orwell" },
    { title: "Catch-22", author: "Joseph Heller" },
    { title: "Lolita", author: "Vladimir Nabokov" },
    { title: "American Psycho", author: "Bret Easton Ellis" },
    { title: "The Satanic Verses", author: "Salman Rushdie" },
    { title: "Malleus Maleficarum", author: "Heinrich Kramer and Jacob Sprenger" },
    { title: "It", author: "Stephen King" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" },
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "Mein Kampf", author: "Adolf Hitler" }]
}

const addBook = (library: Library, book: { title: string, author: string }):Library => {
    library.books = [...library.books, book]
    return library
}

const removeBookByTitle = (library: Library, booksname: string) => {
    library.books = library.books.filter(v => v.title.toLocaleLowerCase() != booksname.toLocaleLowerCase())
    return library
}

const libraryElement: HTMLDivElement | null = document.querySelector('.library')

const booksrender = () => {
    if (libraryElement) {
        libraryElement.innerHTML = '' 
        for (let i = 0; i < library.books.length; i++) {
            libraryElement.innerHTML += `        <div class="book">
                <h3 class="title">${library.books[i].title}</h3>
                <p class="author"> ${library.books[i].author}</p>
            </div>`
        }
    }
}

booksrender()

const addBookElement: HTMLButtonElement | null = document.querySelector('#add')
const titleofbook: HTMLInputElement | null = document.querySelector('.titleofbook')
const authorofbook: HTMLInputElement | null = document.querySelector('.authorofbook')
const removetitleofbook: HTMLInputElement | null = document.querySelector('.removetitleofbook')
const removebookbutton:HTMLButtonElement | null = document.querySelector('#remove')

addBookElement?.addEventListener('click', () => {
    if (!titleofbook?.value) {
        alert('enter a title!!!!')
        return 0
    }
    if (!authorofbook?.value) {
        alert('enter the author!!!!')
        return 0
    }
    library = addBook(library,{ title: titleofbook.value, author: authorofbook.value }) 
    booksrender()
})

removebookbutton?.addEventListener('click', () => {
    if (!removetitleofbook?.value) {
        alert('enter a title!!!!')
        return 0
    }
    removeBookByTitle(library,removetitleofbook?.value)
    booksrender()
})
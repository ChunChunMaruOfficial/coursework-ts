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

const filterAffordableProducts = (minprice: number) => {
    const answer: Product[] = Productarray.filter(v => v.price < minprice)
    return answer
}

/* ---------------------------------- Product ---------------------------------- */

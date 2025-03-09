class Comic {
    private _title: string
    private _authorName: string
    private _publisherName: string
    private _pages: number
    private _genre: string
    private _year: number
    private _price: number
    private _discount: number
    private _timeAdded: string

    constructor(
        title: string,
        authorName: string,
        publisherName: string,
        pages: number,
        genre: string,
        year: number,
        price: number,
        discount: number,
        timeAdded: string
    ) {
        this._title = title;
        this._authorName = authorName;
        this._publisherName = publisherName;
        this._pages = pages;
        this._genre = genre;
        this._year = year;
        this._price = price;
        this._discount = discount;
        this._timeAdded = timeAdded;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title
    }

    get authorName(): string {
        return this._authorName;
    }

    set authorName(authorName: string) {
        this._authorName = authorName
    }

    get publisherName(): string {
        return this._publisherName;
    }

    set publisherName(publisherName: string) {
        this._publisherName = publisherName
    }

    get pages(): number {
        return this._pages;
    }
    set pages(pages: number) {
        this._pages = pages
    }

    get genre(): string {
        return this._genre;
    }
    set genre(genre: string) {
        this._genre = genre
    }

    get year(): number {
        return this._year
    }

    set year(year: number) {
        this._year = year
    }

    get price(): number {
        return this._price;
    }
    set price(price: number) {
        this._price = price
    }

    get discount(): number {
        return this._discount;
    }
    set discount(discount: number) {
        this._discount = discount
    }

    get timeAdded(): string {
        return this._timeAdded;
    }
    set timeAdded(timeAdded: string) {
        this._timeAdded = timeAdded
    }
}

let comics: Comic[] = []
let card: Comic[] = []

const comic1 = new Comic(
    "The Adventures of Superhero X",
    "John Doe",
    "ComicWorld",
    120,
    "Action",
    2021,
    19.99,
    0.1,
    String(Date.now())
);

const comic2 = new Comic(
    "Mystery of the Lost Galaxy",
    "Jane Smith",
    "GalacticComics",
    95,
    "Sci-Fi",
    2020,
    14.99,
    0.2,
    String(Date.now())
);

const comic3 = new Comic(
    "The Enchanted Forest",
    "Emily Johnson",
    "FantasyPress",
    110,
    "Fantasy",
    2022,
    17.99,
    0.15,
    String(Date.now())
);

comics.push(comic1, comic2, comic3)

const storageElement: HTMLDivElement | null = document.querySelector('.storageelements')
const cardElement: HTMLDivElement | null = document.querySelector('.cardelements')
let cardElementpart = document.querySelectorAll('.cardElement')


const comicrender = () => {
    if (storageElement) {
        storageElement.innerHTML = ''
        for (let i = 0; i < comics.length; i++) {
            storageElement.innerHTML += `<div class="storageElement">
           <button class='addtocard'> 🛒 </button>
        <span> <p>📅 ${comics[i].year}</p> <button> ✏ </button> </span>
        <span><h3>${comics[i].title}</h3> <button> ✏ </button> </span>
        <span><p>😸 ${comics[i].authorName}</p> <button> ✏ </button> </span>
        <span><p>📢 ${comics[i].publisherName}</p> <button> ✏ </button> </span>
        <span><p>😎 ${comics[i].genre}</p> <button> ✏ </button> </span>
        <span><p>📖 ${comics[i].pages}</p> <button> ✏ </button> </span>
        <span><p>💲 ${comics[i].price}</p> <button> ✏ </button> </span>
        <span><p>〽 ${comics[i].discount}</p> <button> ✏ </button> </span>
        <span><p>⏲ ${comics[i].timeAdded}</p> <button> ✏ </button> </span>
        <button class='deletecomic'> delete </button>
        </div>`
        }
    }
}

const cardender = (array: Comic[], bool: boolean): string => {
    let answer: string = ''
    if (cardElement) {
        cardElement.innerHTML = ''
        for (let i = 0; i < array.length; i++) {
            answer += `<div class="cardElement">
         <p>📅 ${array[i].year}</p> 
        <h3>${array[i].title}</h3> 
        <p>😸 ${array[i].authorName}</p> 
        <p>📢 ${array[i].publisherName}</p> 
        <p>😎 ${array[i].genre}</p> 
        <p>📖 ${array[i].pages}</p> 
        <p>💲 ${array[i].price}</p> 
        <p>〽 ${array[i].discount}</p> 
        <p>⏲ ${array[i].timeAdded}</p> 
       ${bool && `<button class='remove'> remove from card </button>`}
        </div>`
        }
    }
    return answer
}

comicrender()
let storageElements = document.querySelectorAll('.storageElement')


const addElement: HTMLButtonElement | null = document.querySelector('.addbutton')
const alertElement: HTMLParagraphElement | null = document.querySelector('.alert')

const titleElement: HTMLInputElement | null = document.querySelector('#title')
const authorNameElement: HTMLInputElement | null = document.querySelector('#authorName')
const publisherNameElement: HTMLInputElement | null = document.querySelector('#publisherName')
const pagesElement: HTMLInputElement | null = document.querySelector('#pages')
const genreElement: HTMLInputElement | null = document.querySelector('#genre')
const yearElement: HTMLInputElement | null = document.querySelector('#year')
const priceElement: HTMLInputElement | null = document.querySelector('#price')
const discountElement: HTMLInputElement | null = document.querySelector('#discount')
const timeAddedElement: HTMLInputElement | null = document.querySelector('#timeAdded')


const updateAll = () => {

    
    Addtocard()
    Removefromcard()
    Editing()

}


/* -------------------------- Adding -------------------------- */


addElement?.addEventListener('click', () => {
    if (titleElement && authorNameElement && publisherNameElement && pagesElement && genreElement && yearElement && priceElement && discountElement && timeAddedElement && alertElement) {

        if (!titleElement.value) {
            alertElement.innerHTML = `please, enter a title of comic`
            return 0
        }
        if (!authorNameElement.value) {
            alertElement.innerHTML = `please, enter a author name of comic`
            return 0
        }
        if (!publisherNameElement.value) {
            alertElement.innerHTML = `please, enter a publisher name of comic`
            return 0
        }
        if (!pagesElement.value) {
            alertElement.innerHTML = `please, enter count of pages of comic`
            return 0
        }
        if (!genreElement.value) {
            alertElement.innerHTML = `please, enter a genre of comic`
            return 0
        }
        if (!yearElement.value) {
            alertElement.innerHTML = `please, enter a year of comic`
            return 0
        }
        if (!priceElement.value) {
            alertElement.innerHTML = `please, enter a price of comic`
            return 0
        }
        if (!timeAddedElement.value) {
            alertElement.innerHTML = `please, enter time of adding of comic`
            return 0
        }
        alertElement.innerHTML = ``
        const newcomic = new Comic(titleElement.value, authorNameElement.value, publisherNameElement.value, Number(pagesElement.value), genreElement.value, Number(yearElement.value), Number(priceElement.value), priceElement.value ? Number(priceElement.value) : 0, timeAddedElement.value)

        comics.push(newcomic)
        comicrender()
        updateAll()
    }
})


/* -------------------------- Editing -------------------------- */

const removeallactiveeditings = () => {
    storageElements = document.querySelectorAll('.storageElement')
    storageElements.forEach((v, i) => {
        const spans = v.querySelectorAll('span')
        spans?.forEach((v1, i1) => {

            const currenttext = v1.querySelector('p')
            const currentinput: HTMLInputElement | null = v1.querySelector('input')
            if (currentinput) {
                currentinput.remove()
            }
            if (currenttext) currenttext.style.display = 'block'

        })
    })
}

const Editing = () => {
    storageElements = document.querySelectorAll('.storageElement')
    storageElements.forEach((v, i) => {
        let t: HTMLButtonElement | null
        const spans = v.querySelectorAll('span')
        spans?.forEach((v1, i1) => {
            const editbutton = v1.querySelector('button')
            const currenttext = v1.querySelector('p')
            editbutton?.addEventListener('click', () => {
                if ((!t || t != editbutton) && currenttext) {
                    removeallactiveeditings()

                    if (currenttext) currenttext.style.display = 'none'
                    const createinput = document.createElement('input')
                    createinput['placeholder'] = currenttext.innerHTML
                    createinput.focus()
                    editbutton.innerHTML = '✔'
                    v1.appendChild(createinput)
                    t = editbutton
                } else if (t == editbutton) {
                    const currentinput = v1.querySelector('input')
                    switch (i1) {
                        case 0:
                            comics[i].year = Number(currentinput?.value)
                            break;
                        case 1:
                            comics[i].title = String(currentinput?.value)
                            break;
                        case 2:
                            comics[i].authorName = String(currentinput?.value)
                            break;
                        case 3:
                            comics[i].publisherName = String(currentinput?.value)
                            break;
                        case 4:
                            comics[i].genre = String(currentinput?.value)
                            break;
                        case 5:
                            comics[i].pages = Number(currentinput?.value)
                            break;
                        case 6:
                            comics[i].price = Number(currentinput?.value)
                            break;
                        case 7:
                            comics[i].discount = Number(currentinput?.value)
                            break;
                        case 8:
                            comics[i].timeAdded = String(currentinput?.value)
                            break;
                    }
                    if (currenttext) currenttext.style.display = 'block'
                    comicrender()
                    editbutton.innerHTML = '✏'
                    t = null
                    currentinput?.remove()
                    updateAll()
                }
            })
        })
    })

}

Editing()
/* -------------------------- Deliting -------------------------- */


const Deliting = () => {
    storageElements.forEach((v, i) => {
        const deleteb = v.querySelector('.deletecomic')
        deleteb?.addEventListener('click', () => {
            comics = comics.filter((_, i1) => i != i1)
            storageElements = document.querySelectorAll('.storageElement')
            comicrender()
            setTimeout(() => {
                Deliting()
            }, 10);
        })
    })
}

Deliting()
/* -------------------------- Add to card -------------------------- */


const Addtocard = () => {
    storageElements = document.querySelectorAll('.storageElement')
    storageElements.forEach((v, i) => {
        const addtocardbtn = v.querySelector('.addtocard')
        addtocardbtn?.addEventListener('click', () => {
            card.push(comics[i])
            console.log(comics[i])

            if (cardElement)
                cardElement.innerHTML = cardender(card, true)
            updateAll()
        })
    })
}

Addtocard()
/* -------------------------- Remove from card -------------------------- */


const Removefromcard = () => {
    cardElementpart = document.querySelectorAll('.cardElement');
    console.log(cardElementpart);
    cardElementpart.forEach((v, i) => {
        const removebtn = v.querySelector('.remove');
        removebtn?.addEventListener('click', () => {
            console.log('button click');
            card = card.filter((_, i1) => i1 !== i);
            if (cardElement)
                cardElement.innerHTML = cardender(card, true)
            updateAll()
        })
    }
    )
}

Removefromcard()

const searchbtn = document.querySelector('.searchbtn')
const resultElement = document.querySelector('.result')
const searchinp: HTMLInputElement | null = document.querySelector('.searchinp')

searchbtn?.addEventListener('click', () => {
    if (searchinp && alertElement) {

        if (!searchinp.value) {
            alertElement.innerHTML = `please, enter text`
            return 0
        }

        const tarray = comics.filter(v => v.authorName.toLowerCase() == searchinp.value.toLowerCase() || v.title.toLowerCase() == searchinp.value.toLowerCase())
        console.log(tarray);

        if (resultElement)
            resultElement.innerHTML = cardender(tarray, false)
    }
})
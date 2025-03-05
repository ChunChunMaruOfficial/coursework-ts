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

    get authorName(): string {
        return this._authorName;
    }

    get publisherName(): string {
        return this._publisherName;
    }

    get pages(): number {
        return this._pages;
    }

    get genre(): string {
        return this._genre;
    }

    get year(): number {
        return this._year;
    }

    get price(): number {
        return this._price;
    }

    get discount(): number {
        return this._discount;
    }

    get timeAdded(): string {
        return this._timeAdded;
    }
}

let comics: Comic[] = []

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

const storageElement: HTMLDivElement | null = document.querySelector('.storage')

const comicrender = () => {
    if (storageElement) {
        storageElement.innerHTML = ''
        for (let i = 0; i < comics.length; i++) {
            storageElement.innerHTML += `<div class="storageElement">
        <span> <p>📅 ${comics[i].year}</p> <button class="edityear"> ✏ </button> </span>
        <span><h3>${comics[i].title}</h3> <button class="edittitle"> ✏ </button> </span>
        <span><p>😸 ${comics[i].authorName}</p> <button class="editauthorName"> ✏ </button> </span>
        <span><p>📢 ${comics[i].publisherName}</p> <button class="editpublisherName"> ✏ </button> </span>
        <span><p>😎 ${comics[i].genre}</p> <button class="editgenre"> ✏ </button> </span>
        <span><p>📖 ${comics[i].pages}</p> <button class="editpages"> ✏ </button> </span>
        <span><p>💲 ${comics[i].price}</p> <button class="editprice"> ✏ </button> </span>
        <span><p>〽 ${comics[i].discount}</p> <button class="editdiscount"> ✏ </button> </span>
        <span><p>⏲ ${comics[i].timeAdded}</p> <button class="edittimeAdded"> ✏ </button> </span>
        </div>`
        }
    }
}

comicrender()

const storageElements = document.querySelectorAll('.storageElement')
storageElements.forEach(v => {
    const edityear = v.querySelector('.edityear')
    edityear?.addEventListener('click', () => {

    })
})


/* -------------------------- Adding -------------------------- */

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

        const newcomic = new Comic(titleElement.value, authorNameElement.value, publisherNameElement.value, Number(pagesElement.value), genreElement.value, Number(yearElement.value), Number(priceElement.value), priceElement.value ? Number(priceElement.value) : 0, timeAddedElement.value)

        comics.push(newcomic)
        comicrender()

    }
})
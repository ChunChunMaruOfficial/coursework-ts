var Comic = /** @class */ (function () {
    function Comic(title, authorName, publisherName, pages, genre, year, price, discount, timeAdded) {
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
    Object.defineProperty(Comic.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "authorName", {
        get: function () {
            return this._authorName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "publisherName", {
        get: function () {
            return this._publisherName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "pages", {
        get: function () {
            return this._pages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "genre", {
        get: function () {
            return this._genre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "discount", {
        get: function () {
            return this._discount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "timeAdded", {
        get: function () {
            return this._timeAdded;
        },
        enumerable: false,
        configurable: true
    });
    return Comic;
}());
var comics = [];
var comic1 = new Comic("The Adventures of Superhero X", "John Doe", "ComicWorld", 120, "Action", 2021, 19.99, 0.1, String(Date.now()));
var comic2 = new Comic("Mystery of the Lost Galaxy", "Jane Smith", "GalacticComics", 95, "Sci-Fi", 2020, 14.99, 0.2, String(Date.now()));
var comic3 = new Comic("The Enchanted Forest", "Emily Johnson", "FantasyPress", 110, "Fantasy", 2022, 17.99, 0.15, String(Date.now()));
comics.push(comic1, comic2, comic3);
var storageElement = document.querySelector('.storage');
var comicrender = function () {
    if (storageElement) {
        storageElement.innerHTML = '';
        for (var i = 0; i < comics.length; i++) {
            storageElement.innerHTML += "<div>\n        <span> <p>\uD83D\uDCC5 ".concat(comics[i].year, "</p> <button> \u270F </button> </span>\n        <span><h3>").concat(comics[i].title, "</h3> <button> \u270F </button> </span>\n        <span><p>\uD83D\uDE38 ").concat(comics[i].authorName, "</p> <button> \u270F </button> </span>\n        <span><p>\uD83D\uDCE2 ").concat(comics[i].publisherName, "</p> <button> \u270F </button> </span>\n        <span><p>\uD83D\uDE0E ").concat(comics[i].genre, "</p> <button> \u270F </button> </span>\n        <span><p>\uD83D\uDCD6 ").concat(comics[i].pages, "</p> <button> \u270F </button> </span>\n        <span><p>\uD83D\uDCB2 ").concat(comics[i].price, "</p> <button> \u270F </button> </span>\n        <span><p>\u303D ").concat(comics[i].discount, "</p> <button> \u270F </button> </span>\n        <span><p>\u23F2 ").concat(comics[i].timeAdded, "</p> <button> \u270F </button> </span>\n        </div>");
        }
    }
};
comicrender();
/* -------------------------- Adding -------------------------- */
var addElement = document.querySelector('.addbutton');
var alertElement = document.querySelector('.alert');
var titleElement = document.querySelector('#title');
var authorNameElement = document.querySelector('#authorName');
var publisherNameElement = document.querySelector('#publisherName');
var pagesElement = document.querySelector('#pages');
var genreElement = document.querySelector('#genre');
var yearElement = document.querySelector('#year');
var priceElement = document.querySelector('#price');
var discountElement = document.querySelector('#discount');
var timeAddedElement = document.querySelector('#timeAdded');
addElement === null || addElement === void 0 ? void 0 : addElement.addEventListener('click', function () {
    if (titleElement && authorNameElement && publisherNameElement && pagesElement && genreElement && yearElement && priceElement && discountElement && timeAddedElement && alertElement) {
        if (!titleElement.value) {
            alertElement.innerHTML = "please, enter a title of comic";
            return 0;
        }
        if (!authorNameElement.value) {
            alertElement.innerHTML = "please, enter a author name of comic";
            return 0;
        }
        if (!publisherNameElement.value) {
            alertElement.innerHTML = "please, enter a publisher name of comic";
            return 0;
        }
        if (!pagesElement.value) {
            alertElement.innerHTML = "please, enter count of pages of comic";
            return 0;
        }
        if (!genreElement.value) {
            alertElement.innerHTML = "please, enter a genre of comic";
            return 0;
        }
        if (!yearElement.value) {
            alertElement.innerHTML = "please, enter a year of comic";
            return 0;
        }
        if (!priceElement.value) {
            alertElement.innerHTML = "please, enter a price of comic";
            return 0;
        }
        if (!timeAddedElement.value) {
            alertElement.innerHTML = "please, enter time of adding of comic";
            return 0;
        }
        var newcomic = new Comic(titleElement.value, authorNameElement.value, publisherNameElement.value, Number(pagesElement.value), genreElement.value, Number(yearElement.value), Number(priceElement.value), priceElement.value ? Number(priceElement.value) : 0, timeAddedElement.value);
        comics.push(newcomic);
        comicrender();
    }
});

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
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "authorName", {
        get: function () {
            return this._authorName;
        },
        set: function (authorName) {
            this._authorName = authorName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "publisherName", {
        get: function () {
            return this._publisherName;
        },
        set: function (publisherName) {
            this._publisherName = publisherName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "pages", {
        get: function () {
            return this._pages;
        },
        set: function (pages) {
            this._pages = pages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "genre", {
        get: function () {
            return this._genre;
        },
        set: function (genre) {
            this._genre = genre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (year) {
            this._year = year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "discount", {
        get: function () {
            return this._discount;
        },
        set: function (discount) {
            this._discount = discount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comic.prototype, "timeAdded", {
        get: function () {
            return this._timeAdded;
        },
        set: function (timeAdded) {
            this._timeAdded = timeAdded;
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
            storageElement.innerHTML += "<div class=\"storageElement\">\n        <span> <p>\uD83D\uDCC5 ".concat(comics[i].year, "</p> <button class=\"edityear\"> \u270F </button> </span>\n        <span><h3>").concat(comics[i].title, "</h3> <button class=\"edittitle\"> \u270F </button> </span>\n        <span><p>\uD83D\uDE38 ").concat(comics[i].authorName, "</p> <button class=\"editauthorName\"> \u270F </button> </span>\n        <span><p>\uD83D\uDCE2 ").concat(comics[i].publisherName, "</p> <button class=\"editpublisherName\"> \u270F </button> </span>\n        <span><p>\uD83D\uDE0E ").concat(comics[i].genre, "</p> <button class=\"editgenre\"> \u270F </button> </span>\n        <span><p>\uD83D\uDCD6 ").concat(comics[i].pages, "</p> <button class=\"editpages\"> \u270F </button> </span>\n        <span><p>\uD83D\uDCB2 ").concat(comics[i].price, "</p> <button class=\"editprice\"> \u270F </button> </span>\n        <span><p>\u303D ").concat(comics[i].discount, "</p> <button class=\"editdiscount\"> \u270F </button> </span>\n        <span><p>\u23F2 ").concat(comics[i].timeAdded, "</p> <button class=\"edittimeAdded\"> \u270F </button> </span>\n        </div>");
        }
    }
};
comicrender();
var storageElements = document.querySelectorAll('.storageElement');
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
/* -------------------------- Adding -------------------------- */
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
        alertElement.innerHTML = "";
        var newcomic = new Comic(titleElement.value, authorNameElement.value, publisherNameElement.value, Number(pagesElement.value), genreElement.value, Number(yearElement.value), Number(priceElement.value), priceElement.value ? Number(priceElement.value) : 0, timeAddedElement.value);
        comics.push(newcomic);
        comicrender();
    }
});
/* -------------------------- Editing -------------------------- */
var removeallactiveeditings = function () {
    storageElements = document.querySelectorAll('.storageElement');
    storageElements.forEach(function (v, i) {
        var spans = v.querySelectorAll('span');
        spans === null || spans === void 0 ? void 0 : spans.forEach(function (v1, i1) {
            var currenttext = v1.querySelector('p');
            var currentinput = v1.querySelector('input');
            if (currentinput) {
                currentinput.remove();
            }
            if (currenttext)
                currenttext.style.display = 'block';
        });
    });
};
function Editing() {
    storageElements = document.querySelectorAll('.storageElement');
    storageElements.forEach(function (v, i) {
        var t;
        var spans = v.querySelectorAll('span');
        spans === null || spans === void 0 ? void 0 : spans.forEach(function (v1, i1) {
            var editbutton = v1.querySelector('button');
            var currenttext = v1.querySelector('p');
            editbutton === null || editbutton === void 0 ? void 0 : editbutton.addEventListener('click', function () {
                if ((!t || t != editbutton) && currenttext) {
                    removeallactiveeditings();
                    if (currenttext)
                        currenttext.style.display = 'none';
                    var createinput = document.createElement('input');
                    createinput['placeholder'] = currenttext.innerHTML;
                    createinput.focus();
                    v1.appendChild(createinput);
                    t = editbutton;
                }
                else if (t == editbutton) {
                    var currentinput = v1.querySelector('input');
                    console.log(currentinput);
                    switch (i1) {
                        case 0:
                            comics[i].year = Number(currentinput === null || currentinput === void 0 ? void 0 : currentinput.value);
                            break;
                        case 1:
                            comics[i].title = String(currentinput === null || currentinput === void 0 ? void 0 : currentinput.value);
                            break;
                        case 2:
                            comics[i].authorName = String(currentinput === null || currentinput === void 0 ? void 0 : currentinput.value);
                            break;
                        case 3:
                            comics[i].publisherName = String(currentinput === null || currentinput === void 0 ? void 0 : currentinput.value);
                            break;
                        case 4:
                            comics[i].genre = String(currentinput === null || currentinput === void 0 ? void 0 : currentinput.value);
                            break;
                        case 5:
                            comics[i].pages = Number(currentinput === null || currentinput === void 0 ? void 0 : currentinput.value);
                            break;
                        case 6:
                            comics[i].price = Number(currentinput === null || currentinput === void 0 ? void 0 : currentinput.value);
                            break;
                        case 7:
                            comics[i].discount = Number(currentinput === null || currentinput === void 0 ? void 0 : currentinput.value);
                            break;
                        case 8:
                            comics[i].timeAdded = String(currentinput === null || currentinput === void 0 ? void 0 : currentinput.value);
                            break;
                    }
                    currentinput === null || currentinput === void 0 ? void 0 : currentinput.remove();
                    if (currenttext)
                        currenttext.style.display = 'block';
                    comicrender();
                    t = null;
                }
            });
        });
    });
}
Editing();
storageElement === null || storageElement === void 0 ? void 0 : storageElement.addEventListener('click', function () {
    Editing();
});

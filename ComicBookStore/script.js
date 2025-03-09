var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var card = [];
var comic1 = new Comic("The Adventures of Superhero X", "John Doe", "ComicWorld", 120, "Action", 2021, 19.99, 0.1, String(Date.now()));
var comic2 = new Comic("Mystery of the Lost Galaxy", "Jane Smith", "GalacticComics", 95, "Sci-Fi", 2020, 14.99, 0.2, String(Date.now()));
var comic3 = new Comic("The Enchanted Forest", "Emily Johnson", "FantasyPress", 110, "Fantasy", 2022, 17.99, 0.15, String(Date.now()));
var comic4 = new Comic("Adventures in the Pixelated World", "Michael Brown", "TechComics", 120, "Adventure", 2019, 12.49, 0.1, String(Date.now()));
var comic5 = new Comic("Underwater Kingdom", "Laura Wilson", "OceanicPublishing", 105, "Fantasy", 2021, 16.99, 0.18, String(Date.now()));
var comic6 = new Comic("Chronicles of the Cyber Realm", "Kevin Davis", "CyberComics", 130, "Sci-Fi", 2023, 19.49, 0.25, String(Date.now()));
var comic7 = new Comic("Tales of the Forgotten Era", "Sophia Moore", "HistoricComics", 98, "History", 2018, 13.79, 0.12, String(Date.now()));
var comic8 = new Comic("The Cosmic Voyage", "Daniel Martinez", "StarComics", 115, "Sci-Fi", 2020, 15.99, 0.22, String(Date.now()));
var comic9 = new Comic("Legends of the Mystic Isles", "Emma Taylor", "IslandComics", 92, "Fantasy", 2022, 14.49, 0.2, String(Date.now()));
var comic10 = new Comic("Realm of the Shadow Beasts", "Olivia Anderson", "DarkFantasyPress", 100, "Dark Fantasy", 2023, 18.99, 0.27, String(Date.now()));
var comic11 = new Comic("The Secret of the Iron Fortress", "William Lee", "SteampunkComics", 112, "Steampunk", 2019, 16.49, 0.15, String(Date.now()));
var comic12 = new Comic("Worlds Beyond Imagination", "Isabella Harris", "DreamComics", 124, "Sci-Fi", 2021, 17.49, 0.2, String(Date.now()));
var comic13 = new Comic("The Cursed Mirror", "James White", "MysteryHouse", 87, "Mystery", 2022, 14.99, 0.18, String(Date.now()));
comics.push(comic1, comic2, comic3, comic4, comic5, comic6, comic7, comic8, comic9, comic10, comic11, comic12, comic13);
var storageElement = document.querySelector('.storageelements');
var cardElement = document.querySelector('.cardelements');
var cardElementpart = document.querySelectorAll('.cardElement');
var comicrender = function (array) {
    if (storageElement) {
        storageElement.innerHTML = '';
        for (var i = 0; i < array.length; i++) {
            storageElement.innerHTML += "<div class=\"storageElement\">\n           <button class='addtocard'> \uD83D\uDED2 </button>\n        <span> <p>\uD83D\uDCC5 ".concat(array[i].year, "</p> <button> \u270F </button> </span>\n        <span><h3>").concat(array[i].title, "</h3> <button> \u270F </button> </span>\n        <span><p>\uD83D\uDE38 ").concat(array[i].authorName, "</p> <button> \u270F </button> </span>\n        <span><p>\uD83D\uDCE2 ").concat(array[i].publisherName, "</p> <button> \u270F </button> </span>\n        <span><p>\uD83D\uDE0E ").concat(array[i].genre, "</p> <button> \u270F </button> </span>\n        <span><p>\uD83D\uDCD6 ").concat(array[i].pages, "</p> <button> \u270F </button> </span>\n        <span><p>\uD83D\uDCB2 ").concat(array[i].price, "</p> <button> \u270F </button> </span>\n        <span><p>\u303D ").concat(array[i].discount, "</p> <button> \u270F </button> </span>\n        <span><p>\u23F2 ").concat(array[i].timeAdded, "</p> <button> \u270F </button> </span>\n        <button class='deletecomic'> delete </button>\n        </div>");
        }
    }
};
var cardender = function (array, bool) {
    var answer = '';
    if (cardElement) {
        cardElement.innerHTML = '';
        for (var i = 0; i < array.length; i++) {
            answer += "<div class=\"cardElement\">\n         <p>\uD83D\uDCC5 ".concat(array[i].year, "</p> \n        <h3>").concat(array[i].title, "</h3> \n        <p>\uD83D\uDE38 ").concat(array[i].authorName, "</p> \n        <p>\uD83D\uDCE2 ").concat(array[i].publisherName, "</p> \n        <p>\uD83D\uDE0E ").concat(array[i].genre, "</p> \n        <p>\uD83D\uDCD6 ").concat(array[i].pages, "</p> \n        <p>\uD83D\uDCB2 ").concat(array[i].price, "</p> \n        <p>\u303D ").concat(array[i].discount, "</p> \n        <p>\u23F2 ").concat(array[i].timeAdded, "</p> \n       ").concat(bool && "<button class='remove'> remove from card </button>", "\n        </div>");
        }
    }
    return answer;
};
comicrender(comics);
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
var updateAll = function () {
    storageElements = document.querySelectorAll('.storageElement');
    cardElementpart = document.querySelectorAll('.cardElement');
    Deliting();
    Addtocard();
    Removefromcard();
    Editing();
};
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
        comicrender(comics);
        updateAll();
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
var Editing = function () {
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
                    editbutton.innerHTML = '✔';
                    v1.appendChild(createinput);
                    t = editbutton;
                }
                else if (t == editbutton) {
                    var currentinput = v1.querySelector('input');
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
                    if (currenttext)
                        currenttext.style.display = 'block';
                    comicrender(comics);
                    editbutton.innerHTML = '✏';
                    t = null;
                    currentinput === null || currentinput === void 0 ? void 0 : currentinput.remove();
                    setTimeout(function () {
                        updateAll();
                    }, 10);
                }
            });
        });
    });
};
Editing();
/* -------------------------- Deliting -------------------------- */
var Deliting = function () {
    storageElements.forEach(function (v, i) {
        var deleteb = v.querySelector('.deletecomic');
        deleteb === null || deleteb === void 0 ? void 0 : deleteb.addEventListener('click', function () {
            comics = comics.filter(function (_, i1) { return i != i1; });
            comicrender(comics);
            setTimeout(function () {
                updateAll();
            }, 10);
        });
    });
};
Deliting();
/* -------------------------- Add to card -------------------------- */
var Addtocard = function () {
    storageElements.forEach(function (v, i) {
        var addtocardbtn = v.querySelector('.addtocard');
        addtocardbtn === null || addtocardbtn === void 0 ? void 0 : addtocardbtn.addEventListener('click', function () {
            card = __spreadArray(__spreadArray([], card, true), [comics[i]], false);
            console.log(card);
            if (cardElement)
                cardElement.innerHTML = cardender(card, true);
            setTimeout(function () {
                cardElementpart = document.querySelectorAll('.cardElement');
                Removefromcard();
            }, 10);
        });
    });
};
Addtocard();
/* -------------------------- Remove from card -------------------------- */
var Removefromcard = function () {
    console.log('called');
    cardElementpart.forEach(function (v, i) {
        var removebtn = v.querySelector('.remove');
        removebtn === null || removebtn === void 0 ? void 0 : removebtn.addEventListener('click', function () {
            console.log('button click');
            card = card.filter(function (v1) { return v1 != card[i]; });
            console.log(card);
            if (cardElement)
                cardElement.innerHTML = cardender(card, true);
            setTimeout(function () {
                updateAll();
            }, 10);
        });
    });
};
Removefromcard();
var searchbtn = document.querySelector('.searchbtn');
var resultElement = document.querySelector('.result');
var searchinp = document.querySelector('.searchinp');
searchbtn === null || searchbtn === void 0 ? void 0 : searchbtn.addEventListener('click', function () {
    if (searchinp && alertElement) {
        if (!searchinp.value) {
            alertElement.innerHTML = "please, enter text";
            return 0;
        }
        var tarray = comics.filter(function (v) { return v.authorName.toLowerCase() == searchinp.value.toLowerCase() || v.title.toLowerCase() == searchinp.value.toLowerCase(); });
        console.log(tarray);
        if (resultElement)
            resultElement.innerHTML = cardender(tarray, false);
    }
});
var genresElement = document.querySelector('.genres');
var selectElement = document.querySelector('#genres');
var newproductsElement = document.querySelector('.newproducts');
var topsalesElement = document.querySelector('.topsales');
var popularityElement = document.querySelector('.popularity');
var authorsElement = document.querySelector('.authors');
// genresElement?.addEventListener('click', () => {
//     let tgenres: { name: string, count: number }[] = []
//     for (let i = 0; i < comics.length; i++) {
//         let coin: boolean = false
//         for (let i1 = 0; i1 < tgenres.length; i1++) {
//             comics[i].genre == tgenres[i1].name ? (coin = true, tgenres[i1].count++) : ''
//         }
//         if (!coin) {
//             tgenres = [...tgenres, { name: comics[i].genre, count: 1 }]
//         }
//     }
//     tgenres.sort((a, b) => b.count - a.count)
//     let t2array: Comic[] = []
//     for (let i = 0; i < comics.length; i++) {
//         comics[i].genre == tgenres[0].name ? t2array = [...t2array, comics[i]] : ''
//     }
//     comicrender(t2array)
// })
genresElement === null || genresElement === void 0 ? void 0 : genresElement.addEventListener('click', function () {
    var t2array = [];
    if (selectElement) {
        for (var i = 0; i < comics.length; i++) {
            comics[i].genre == selectElement.value ? t2array = __spreadArray(__spreadArray([], t2array, true), [comics[i]], false) : '';
        }
    }
    comicrender(t2array);
});
newproductsElement === null || newproductsElement === void 0 ? void 0 : newproductsElement.addEventListener('click', function () {
    var max = 0;
    for (var i = 0; i < comics.length; i++) {
        comics[i].year > max ? max = comics[i].year : '';
    }
    var t2array = [];
    for (var i = 0; i < comics.length; i++) {
        comics[i].year == max ? t2array = __spreadArray(__spreadArray([], t2array, true), [comics[i]], false) : '';
    }
    comicrender(t2array);
});
topsalesElement === null || topsalesElement === void 0 ? void 0 : topsalesElement.addEventListener('click', function () {
    var t2array = comics;
    t2array.sort(function (a, b) { return a.price - b.price; });
    t2array.length = 5;
    comicrender(t2array);
});

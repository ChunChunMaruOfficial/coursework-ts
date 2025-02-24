var _a;
var products = ["Телевизор", "Ноутбук", "Смартфон", "Планшет", "Клавиатура", "Мышь", "Наушники", "Фитнес-браслет", "Умные часы", "Внешний жесткий диск", "Игровая консоль", "Флешка", "Принтер", "Кофеварка", "Тостер", "Микроволновка", "Стиральная машина", "Пылесос", "Утюг", "Блендер", "Миксер", "Электрочайник", "Фен", "Планшет", "Пылесос-робот", "Настольная лампа", "Триммер", "Видеокамера", "Фотоаппарат", "Игровая клавиатура"];
var getRandomInit = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var getUserOrders = function () {
    var productsarray = new Array(getRandomInit(2, 13));
    for (var i = 0; i < productsarray.length; i++) {
        productsarray[i] = products[getRandomInit(0, products.length)];
    }
    return productsarray;
};
var User = /** @class */ (function () {
    function User(name, mail) {
        this._username = name;
        this._mail = mail;
        this._isAdmin = getRandomInit(0, 2) == 1 ? true : false;
        this._components = getUserOrders();
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "isAdmin", {
        get: function () {
            return this._isAdmin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "components", {
        get: function () {
            return this._components.join(', ');
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.getAdmins = function () {
        var temparray = [];
        for (var i = 0; i < userarray.length; i++) {
            userarray[i].isAdmin && temparray.push(userarray[i]);
        }
        return temparray;
    };
    User.prototype.toString = function () {
        return "".concat(this._username, ", ").concat(this._mail, " ").concat(this._isAdmin ? '(Admin)' : '');
    };
    return User;
}());
var userarray = new Array(getRandomInit(2, 13));
var info = document.createElement('span');
info.innerHTML = "Encoded usernames:<br>";
for (var i = 0; i < userarray.length; i++) {
    userarray[i] = new User(String(getRandomInit(100, 100000)), String(getRandomInit(100, 100000)));
    info.innerHTML += "<br>".concat(userarray[i].username);
}
info.innerHTML += "<br><h6>\u043D\u0443\u0434\u0430 \u043F\u0440\u043E\u0441\u0442\u043E \u0446\u0438\u0444\u0440\u044B \u0432\u043C\u0435\u0441\u0442\u043E \u0438\u043C\u0435\u043D \u0438 \u0447\u0442\u043E\u043E\u043E\u0443 (\u2310\u25A0_\u25A0)</h6>";
var admins = document.createElement('p');
admins.innerHTML = "Admins:<br>";
var adminsarray = userarray[0].getAdmins();
for (var i = 0; i < adminsarray.length; i++) {
    admins.innerHTML += "<br>".concat(adminsarray[i].toString(), ", orders of this admin: ").concat(adminsarray[i].components);
}
(_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.append(info, admins);

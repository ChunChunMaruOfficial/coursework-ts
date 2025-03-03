var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var getrandominit = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var Vehicle = /** @class */ (function () {
    function Vehicle(position) {
        this._position = position;
    }
    Vehicle.prototype.move = function (distance) {
        this._position += distance;
        console.log(this._position);
    };
    Vehicle.prototype.getPosition = function () {
        return this._position;
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(model, position) {
        var _this = _super.call(this, position) || this;
        _this._model = model;
        return _this;
    }
    return Car;
}(Vehicle));
var create = document.querySelector('#create');
var carmodel = document.querySelector('#carmodel');
var cardistance = document.querySelector('#cardistance');
var carElement = document.querySelector('.car');
var autos = [];
create === null || create === void 0 ? void 0 : create.addEventListener('click', function () {
    if (!(carmodel === null || carmodel === void 0 ? void 0 : carmodel.value)) {
        alert('enter a model!!!!');
        return 0;
    }
    if (!(cardistance === null || cardistance === void 0 ? void 0 : cardistance.value)) {
        alert('enter a distance!!!!');
        return 0;
    }
    var newcar = new Car(carmodel === null || carmodel === void 0 ? void 0 : carmodel.value, Number(cardistance === null || cardistance === void 0 ? void 0 : cardistance.value));
    autos.push(newcar);
    if (carElement) {
        carElement.innerHTML += "\n        <div class=\"element\"> \n        <h3 class=\"carname\">".concat(carmodel === null || carmodel === void 0 ? void 0 : carmodel.value, "</h3>\n        <p class=\"cardistance\">").concat(cardistance === null || cardistance === void 0 ? void 0 : cardistance.value, " km</p>\n                <span><input type=\"number\" placeholder=\"edit a distance\"> <button>confirm a new distance</button></span>\n</div>");
    }
    var elements = document.querySelectorAll('.element');
    elements.forEach(function (v, i) {
        var buttonel = v.querySelector('span>button');
        var inputel = v.querySelector('span>input');
        var cardistanceel = v.querySelector('.cardistance');
        if (buttonel && inputel && cardistanceel)
            buttonel.addEventListener('click', function () {
                autos[i].move(Number(inputel.value));
                cardistanceel.innerHTML = "".concat(autos[i].getPosition(), " km");
            });
    });
});

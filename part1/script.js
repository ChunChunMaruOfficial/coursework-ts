var GetRandomInit = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var Human = /** @class */ (function () {
    function Human(i) {
        this._height = GetRandomInit(130, 250);
        this._sex = GetRandomInit(0, 1) === 1 ? 'male' : 'female';
        this._weight = GetRandomInit(40, 200);
        this._social_rating = GetRandomInit(13, 113);
        this._financial_balance = GetRandomInit(-1000, 3364);
        this._i = i;
    }
    Object.defineProperty(Human.prototype, "financial_balance", {
        get: function () {
            return this._financial_balance;
        },
        enumerable: false,
        configurable: true
    });
    Human.prototype.toString = function () {
        return "[".concat(this._i, "]: this is ").concat(this._sex, " creature, weighing ").concat(this._weight, " kg, he is ").concat(this._height, " cm tall, his social rating is ").concat(this._social_rating, ", and he has: ").concat(this._financial_balance);
    };
    return Human;
}());
var array = Array(GetRandomInit(5, 15));
for (var i = 0; i < array.length; i++) {
    array[i] = new Human(i);
    var h1 = document.createElement('h5');
    h1.innerHTML += array[i].toString();
    document.body.appendChild(h1);
}
var min = 0;
var max = 0;
for (var i = 0; i < array.length; i++) {
    array[i].financial_balance > array[max].financial_balance ? max = i : '';
    array[i].financial_balance < array[min].financial_balance ? min = i : '';
}
var poorest = document.createElement('p');
poorest.innerHTML += "The poorest: \n".concat(array[min].toString());
var richest = document.createElement('p');
richest.innerHTML += "The richest: \n".concat(array[max].toString());
document.body.append(poorest, richest);

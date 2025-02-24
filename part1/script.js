var GetRandomInit = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var Human = /** @class */ (function () {
    function Human(i) {
        this._height = GetRandomInit(130, 250);
        this._sex = GetRandomInit(0, 2) === 1 ? 'male' : 'female';
        this._weight = GetRandomInit(40, 200);
        this._social_rating = GetRandomInit(13, 113);
        this._financial_balance = GetRandomInit(-1000, 3364);
        this._i = i;
    }
    Object.defineProperty(Human.prototype, "financial_balance", {
        get: function () {
            return this._financial_balance;
        },
        set: function (value) {
            this._financial_balance = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "sex", {
        get: function () {
            return this._sex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "social_rating", {
        get: function () {
            return this._social_rating;
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
    var h5 = document.createElement('h5');
    h5.innerHTML += array[i].toString();
    document.body.appendChild(h5);
}
var min = 0;
var max = 0;
for (var i = 0; i < array.length; i++) {
    array[i].financial_balance > array[max].financial_balance ? max = i : '';
    array[i].financial_balance < array[min].financial_balance ? min = i : '';
}
var poorest = document.createElement('p');
poorest.innerHTML += "<b>The poorest</b>: \n".concat(array[min].toString());
var richest = document.createElement('p');
richest.innerHTML += "<b>The richest</b>: \n".concat(array[max].toString());
var for_two = document.createElement('p');
for_two.innerHTML += "amount for two: <b>\n".concat((array[max].financial_balance + array[min].financial_balance) / 2, "</b>");
var lowest = 0;
for (var i = 0; i < array.length; i++) {
    array[i].height < array[lowest].height ? lowest = i : '';
}
var mbi = Math.round(array[lowest].weight / (Math.pow((array[lowest].height / 100), 2)));
var lowestman = document.createElement('p');
lowestman.innerHTML += "<b>the lowest</b>: \n".concat(array[lowest].toString(), ", his bmi: <b> ").concat(mbi, "</b> kg/m\u00B2");
var fattest = 0;
var thinnest = 0;
for (var i = 0; i < array.length; i++) {
    array[i].weight > array[fattest].weight ? fattest = i : '';
    array[i].weight < array[thinnest].weight ? thinnest = i : '';
}
var thefattest = document.createElement('p');
thefattest.innerHTML += "<b>The fattest</b>: \n".concat(array[fattest].toString());
var thethinnest = document.createElement('p');
thethinnest.innerHTML += "<b>The thinnest</b>: \n".concat(array[thinnest].toString());
var equally_tall = document.createElement('p');
equally_tall.innerHTML += "they are equally tall: <b>\n".concat((array[fattest].weight + array[thinnest].weight) / 2, "</b> kg");
document.body.append(poorest, richest, for_two, lowestman, thefattest, thethinnest, equally_tall);
for (var i = 0; i < array.length; i++) {
    var header5 = document.createElement('h5');
    header5.innerHTML += "[".concat(i, "]: old balance:").concat(array[i].financial_balance, ", new balance: ");
    array[i].financial_balance = Math.round((array[i].financial_balance * array[i].social_rating) / 13);
    header5.innerHTML += "<b>".concat(array[i].financial_balance, "</b>");
    document.body.appendChild(header5);
}
var people = 0;
for (var i = 0; i < array.length; i++) {
    array[i].sex == 'female' ? people-- : people++;
}
var pairs = document.createElement('p');
if (people == 0) {
    pairs.innerHTML += "everyone has a pair\uD83E\uDD70\uD83E\uDD70\uD83E\uDD70";
}
else {
    var gender = people < 0 ? 'female' : 'male';
    var redbalance = 0;
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        console.log(array[i].sex);
        if (array[i].sex == gender) {
            redbalance += array[i].financial_balance;
            index++;
        }
        if (index == Math.abs(people))
            break;
    }
    pairs.innerHTML += "there are <b>".concat(Math.abs(people), "</b> ").concat(gender, " without a partner\uD83D\uDE1E\uD83D\uDE1E.They will spend the rest of their miserable life alone with <b>$").concat(redbalance, "</b> on their balance");
}
document.body.append(pairs);

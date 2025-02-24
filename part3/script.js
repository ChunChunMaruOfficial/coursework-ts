var _a, _b;
var Character = /** @class */ (function () {
    function Character(name, health, attack) {
        this._name = name;
        this._health = health;
        this._attack = attack;
    }
    return Character;
}());
var Hero = new Character('Link', 20, 69);
var Inventory = [];
var text = '';
for (var i = 0; i < 6; i++) {
    Inventory.push({ id: i, name: "name of ".concat(i, "st predmet"), type: "some ".concat(Math.round(i * Math.PI), " type") });
    text += JSON.stringify(Inventory[i], null, '         ');
}
var getItemById = function (array, id) {
    var result = array.filter(function (v) { return v.id == id; });
    return JSON.stringify(result[0], null, '   ');
};
var inputeinfach = document.querySelector('input');
(_a = document.querySelector('#butn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    if (inputeinfach) {
        var item = getItemById(Inventory, Number(inputeinfach.value));
        textarea.innerHTML = item ? JSON.stringify(item, null, '   ') : 'Item not found';
    }
});
var textarea = document.createElement('textarea');
textarea.innerHTML += text;
(_b = document.querySelector('body')) === null || _b === void 0 ? void 0 : _b.append(textarea);

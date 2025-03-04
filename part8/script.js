var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var getrandomInit = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var Character = /** @class */ (function () {
    function Character(name, health, attack) {
        this._name = name;
        this._health = health;
        this._attack = attack;
    }
    Object.defineProperty(Character.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "health", {
        get: function () {
            return this._health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "attack", {
        get: function () {
            return this._attack;
        },
        enumerable: false,
        configurable: true
    });
    Character.prototype.toString = function () {
        return "".concat(this._name, " has a ").concat(this._health, " HP, attack with ").concat(this._attack);
    };
    Character.prototype.addItemToInventory = function (item) {
        this.inventory = __spreadArray(__spreadArray([], this.inventory, true), [item], false);
        console.log(this.inventory);
    };
    Character.prototype.calculateDamage = function () {
        return getrandomInit(0, this._attack);
    };
    Character.prototype.healCharacter = function (n) {
        this._health = this._health + n > 100 ? 100 : this._health + n;
    };
    return Character;
}());
var checkInventory = function (character, itemType) {
    return character.inventory.some(function (v) { return v.type == itemType; });
};
var Item = /** @class */ (function () {
    function Item(name, type, power) {
        this._name = name;
        this._type = type;
        this._power = power;
    }
    Object.defineProperty(Item.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "power", {
        get: function () {
            return this._power;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
var characters = [];
var items = [];
var reserve = document.querySelector('.reserve');
function createCharacter() {
    var name = document.querySelector('#charName');
    var health = document.querySelector('#charHealth');
    var attack = document.querySelector('#charAttack');
    if (name && health && attack && reserve) {
        var newCharacter = new Character(name.value, Number(health.value), Number(attack.value));
        characters.push(newCharacter);
        reserve.innerHTML += "\n        <div>\n        <h5>Character</h5>\n        <h3>".concat(newCharacter.name, "</h3>\n            <p>health: ").concat(newCharacter.health, " HP</p>\n            <p>attack: ").concat(newCharacter.attack, " </p>\n        </div>");
        console.log("Character Created: ".concat(newCharacter.toString()));
    }
}
function createItem() {
    var name = document.querySelector('#itemName');
    var type = document.querySelector('#itemType');
    var power = document.querySelector('#itemPower');
    if (name && type && power && reserve) {
        var newItem = new Item(name.value, type.value, Number(power.value));
        items.push(newItem);
        reserve.innerHTML += "\n        <div>\n        <h5>Item</h5>\n        <h3>".concat(newItem.name, "</h3>\n            <p>type: ").concat(newItem.type, "</p>\n            <p>power: ").concat(newItem.power, " </p>\n        </div>");
        console.log("Item Created: ".concat(newItem.name));
    }
}
function addItemToCharacter() {
    var charName = document.querySelector('#charToAdd');
    var itemName = document.querySelector('#itemToAdd');
    var character = null;
    for (var i = 0; i < characters.length; i++) {
        (charName === null || charName === void 0 ? void 0 : charName.value) == characters[i].name ? character = characters[i] : '';
    }
    var item = null;
    for (var i = 0; i < items.length; i++) {
        (itemName === null || itemName === void 0 ? void 0 : itemName.value) == items[i].name ? item = items[i] : '';
    }
    if (character && item) {
        character.addItemToInventory(item);
        console.log("".concat(itemName, " added to ").concat(charName, "'s inventory"));
    }
    else {
        console.log("Character or item not found");
    }
}

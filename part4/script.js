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
var simpleItem = /** @class */ (function () {
    function simpleItem() {
    }
    simpleItem.prototype.use = function () {
        return 'potion used';
    };
    return simpleItem;
}());
var PlayerInventory = /** @class */ (function () {
    function PlayerInventory() {
        this._pieces = [];
    }
    PlayerInventory.prototype.addItem = function (item) {
        this._pieces = __spreadArray(__spreadArray([], this._pieces, true), [item], false);
    };
    PlayerInventory.prototype.removeItem = function (item) {
        this._pieces = this._pieces.filter(function (v) { return v != item; });
    };
    return PlayerInventory;
}());
var HealthPotion = /** @class */ (function (_super) {
    __extends(HealthPotion, _super);
    function HealthPotion(name) {
        var _this = _super.call(this) || this;
        _this._name = name;
        return _this;
    }
    return HealthPotion;
}(simpleItem));
var ManaPotion = /** @class */ (function (_super) {
    __extends(ManaPotion, _super);
    function ManaPotion(name) {
        var _this = _super.call(this) || this;
        _this._name = name;
        return _this;
    }
    return ManaPotion;
}(simpleItem));
var simpleCharacter = /** @class */ (function () {
    function simpleCharacter() {
    }
    return simpleCharacter;
}());
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior(name) {
        var _this = _super.call(this) || this;
        _this._name = name;
        _this._health = 100;
        return _this;
    }
    Warrior.prototype.attack = function () {
        return "\"Warrior ".concat(this._name, " attacks with ").concat(getrandomInit(15, 25));
    };
    return Warrior;
}(simpleCharacter));
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage(name) {
        var _this = _super.call(this) || this;
        _this._name = name;
        _this._health = 100;
        return _this;
    }
    Mage.prototype.attack = function () {
        return "\"Mage ".concat(this._name, " uses a spell on ").concat(getrandomInit(20, 35));
    };
    return Mage;
}(simpleCharacter));
var Player = /** @class */ (function () {
    function Player(name) {
        this._name = name;
        this._health = 100;
    }
    Player.prototype.takeDamage = function (damage) {
        var text = '';
        this._health -= damage;
        text = this._health < 0 ? 'Player is death' : "Player still has ".concat(this._health, " HP");
        return text;
    };
    Object.defineProperty(Player.prototype, "health", {
        get: function () {
            return this._health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var Sword = /** @class */ (function () {
    function Sword(name) {
        this._name = name;
        this._damage = getrandomInit(1, 12);
        this._length = getrandomInit(5, 15);
    }
    return Sword;
}());
var performAttack = function (character) {
    console.log(character.attack());
};
var piku = new Warrior('Piku');
var niku = new Mage('Niku');
performAttack(piku);
performAttack(niku);
var Link = new Player('Link');
console.log(Link.takeDamage(74));
console.log(Link.health);
console.log(Link.takeDamage(37));
var excalibur = new Sword('chunchun');
var healthpotion = new HealthPotion('firstpotion');
var manapotion = new ManaPotion('secondpotion');
console.log(healthpotion.use());
console.log(manapotion.use());

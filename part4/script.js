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
var _a, _b, _c, _d, _e, _f;
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
    Object.defineProperty(HealthPotion.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return HealthPotion;
}(simpleItem));
var ManaPotion = /** @class */ (function (_super) {
    __extends(ManaPotion, _super);
    function ManaPotion(name) {
        var _this = _super.call(this) || this;
        _this._name = name;
        return _this;
    }
    Object.defineProperty(ManaPotion.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return ManaPotion;
}(simpleItem));
var simpleCharacter = /** @class */ (function () {
    function simpleCharacter() {
    }
    Object.defineProperty(simpleCharacter.prototype, "health", {
        get: function () {
            return this._health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(simpleCharacter.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
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
        return "\"Warrior ".concat(this._name, " attacks with ").concat(getrandomInit(15, 25), "\"");
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
        return "\"Mage ".concat(this._name, " uses a spell on ").concat(getrandomInit(20, 35), "\"");
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
        text = this._health < 0 ? 'Player is dead' : "Player still has ".concat(this._health, " HP");
        return text;
    };
    Object.defineProperty(Player.prototype, "health", {
        get: function () {
            return this._health;
        },
        set: function (health) {
            this._health -= health;
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
    Object.defineProperty(Sword.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sword.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
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
/* ---------------------------------- FRONT ---------------------------------- */
var componentsarray = ['Players', 'Warriors', 'Mages', 'Swords', 'HealthPotions', 'ManaPotions'];
var aside = document.querySelector('aside');
if (aside) {
    componentsarray.forEach(function (v) {
        var div = document.createElement('div');
        var h1 = document.createElement('h1');
        h1.innerHTML = v;
        div.classList.add(v);
        div.appendChild(h1);
        aside.appendChild(div);
    });
}
var Playersarray = [];
(_a = document.querySelector('.createaplayer')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var playername = document.querySelector('.playername');
    if (playername) {
        if (!playername.value) {
            alert('enter a players name');
            return 0;
        }
        else {
            var Alan = new Player(playername.value);
            Playersarray = __spreadArray(__spreadArray([], Playersarray, true), [Alan], false);
            var players = document.querySelector('.Players');
            if (players) {
                players.innerHTML += "<span><p>\uD83D\uDD79\uFE0F ".concat(Alan.name, " - ").concat(Alan.health, "</p><button>take damage</button></span>");
                document.querySelectorAll('.Players>span').forEach(function (v, i) {
                    var btn = v.querySelector('button');
                    if (btn) {
                        btn.addEventListener('click', function () {
                            Playersarray[i].health = getrandomInit(5, 15);
                            Playersarray[i].health > 0 ?
                                v.children[0].innerHTML = "<p>\uD83D\uDD79\uFE0F ".concat(Playersarray[i].name, " - ").concat(Playersarray[i].health, "</p>") :
                                v.children[0].innerHTML = "<p>\uD83D\uDE1E ".concat(Playersarray[i].name, " is dead</p>");
                        });
                    }
                });
            }
            playername.value = '';
        }
    }
});
var Warriorsarray = [];
(_b = document.querySelector('.createawarrior')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var warriorname = document.querySelector('.warriorname');
    if (warriorname) {
        if (!warriorname.value) {
            alert('enter a warriors name');
            return 0;
        }
        else {
            var Djo = new Warrior(warriorname.value);
            Warriorsarray = __spreadArray(__spreadArray([], Warriorsarray, true), [Djo], false);
            var warriors = document.querySelector('.Warriors');
            if (warriors) {
                warriors.innerHTML += "<span><p>\uD83D\uDEE1\uFE0F ".concat(Djo.name, " - ").concat(Djo.health, "</p></span>");
            }
            warriorname.value = '';
        }
    }
});
var Magesarray = [];
(_c = document.querySelector('.createamage')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var magename = document.querySelector('.magename');
    if (magename) {
        if (!magename.value) {
            alert('enter a mage name');
            return 0;
        }
        else {
            var Megumin = new Mage(magename.value);
            Magesarray = __spreadArray(__spreadArray([], Magesarray, true), [Megumin], false);
            var mages = document.querySelector('.Mages');
            if (mages) {
                mages.innerHTML += "<span><p>\uD83E\uDDDD\u200D\u2642\uFE0F ".concat(Megumin.name, " - ").concat(Megumin.health, "</p></span>");
            }
            magename.value = '';
        }
    }
});
var Swordsarray = [];
(_d = document.querySelector('.createsword')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    var swordname = document.querySelector('.swordname');
    if (swordname) {
        if (!swordname.value) {
            alert('enter a sword name');
            return 0;
        }
        else {
            var ChunChun = new Sword(swordname.value);
            Swordsarray = __spreadArray(__spreadArray([], Swordsarray, true), [ChunChun], false);
            var swords = document.querySelector('.Swords');
            if (swords) {
                swords.innerHTML += "<span><p>\u2694\uFE0F ".concat(ChunChun.name, " - ").concat(ChunChun.length, "</p></span>");
            }
            swordname.value = '';
        }
    }
});
var HealthPotionsarray = [];
(_e = document.querySelector('.createhealth')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
    var healthname = document.querySelector('.healthname');
    if (healthname) {
        if (!healthname.value) {
            alert('enter a Health Potion name');
            return 0;
        }
        else {
            var HP = new HealthPotion(healthname.value);
            HealthPotionsarray = __spreadArray(__spreadArray([], HealthPotionsarray, true), [HP], false);
            var healthPotions = document.querySelector('.HealthPotions');
            if (healthPotions) {
                healthPotions.innerHTML += "<span><p>\u2764\uFE0F\u200D\uD83E\uDE79 - ".concat(HP.name, "}</p></span>");
            }
            healthname.value = '';
        }
    }
});
var ManaPotionsarray = [];
(_f = document.querySelector('.createmana')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
    var mananame = document.querySelector('.mananame');
    if (mananame) {
        if (!mananame.value) {
            alert('enter a Mana Potion name');
            return 0;
        }
        else {
            var Mana = new ManaPotion(mananame.value);
            ManaPotionsarray = __spreadArray(__spreadArray([], ManaPotionsarray, true), [Mana], false);
            var manaPotions = document.querySelector('.ManaPotions');
            if (manaPotions) {
                manaPotions.innerHTML += "<span><p>\u2728 ".concat(Mana.name, "}</p></span>");
            }
            mananame.value = '';
        }
    }
});

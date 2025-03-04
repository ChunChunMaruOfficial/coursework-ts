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
var getrandomInit = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var GameObject = /** @class */ (function () {
    function GameObject(x, y) {
        this.position = { x: x, y: y };
    }
    return GameObject;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(x, y) {
        return _super.call(this, x, y) || this;
    }
    Object.defineProperty(Player.prototype, "x", {
        get: function () {
            return this.position.x;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.update = function () {
        this.position.x++;
        console.log(this.position);
    };
    return Player;
}(GameObject));
var NPC = /** @class */ (function (_super) {
    __extends(NPC, _super);
    function NPC(x, y) {
        return _super.call(this, x, y) || this;
    }
    Object.defineProperty(NPC.prototype, "y", {
        get: function () {
            return this.position.y;
        },
        enumerable: false,
        configurable: true
    });
    NPC.prototype.update = function () {
        this.position.y++;
        console.log(this.position);
    };
    return NPC;
}(GameObject));
var EnchantedBow = /** @class */ (function () {
    function EnchantedBow(enchantment) {
        this._enchantment = enchantment;
    }
    EnchantedBow.prototype.attack = function () {
        console.log("Shoots from an enchanted bow: ".concat(this._enchantment));
    };
    EnchantedBow.prototype.enchant = function (enchantment) {
        this._enchantment = enchantment;
    };
    return EnchantedBow;
}());
var BasicSword = /** @class */ (function () {
    function BasicSword() {
    }
    BasicSword.prototype.attack = function () {
        console.log('Attacks with a basic sword.');
    };
    return BasicSword;
}());
function performAttack(weapon) {
    weapon.attack();
}
var movePlayer = document.querySelector('.movePlayer');
var moveNPC = document.querySelector('.moveNPC');
var attackbow = document.querySelector('.attackbow');
var attacksword = document.querySelector('.attacksword');
var playerx = document.querySelector('#playerx');
var npcy = document.querySelector('#npcy');
var doomguy = new Player(getrandomInit(2, 12), getrandomInit(2, 12));
var Imp = new NPC(getrandomInit(2, 12), getrandomInit(2, 12));
var shotgun = new EnchantedBow("Demon Rock");
var crucible = new BasicSword;
if (playerx) {
    playerx.innerHTML = "x: ".concat(doomguy.x, ", y:0");
}
if (npcy) {
    npcy.innerHTML = "x: 0, y:".concat(Imp.y);
}
movePlayer === null || movePlayer === void 0 ? void 0 : movePlayer.addEventListener('click', function () {
    doomguy.update();
    if (playerx) {
        playerx.innerHTML = "x: ".concat(doomguy.x, ", y:0");
    }
});
moveNPC === null || moveNPC === void 0 ? void 0 : moveNPC.addEventListener('click', function () {
    Imp.update();
    if (npcy) {
        npcy.innerHTML = "x: 0, y:".concat(Imp.y);
    }
});
attackbow === null || attackbow === void 0 ? void 0 : attackbow.addEventListener('click', function () {
    shotgun.attack();
});
attacksword === null || attacksword === void 0 ? void 0 : attacksword.addEventListener('click', function () {
    crucible.attack();
});

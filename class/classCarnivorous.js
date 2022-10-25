"use strict";
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
exports.__esModule = true;
exports.Carnivorous = void 0;
var classMammals_1 = require("./classMammals");
var Carnivorous = /** @class */ (function (_super) {
    __extends(Carnivorous, _super);
    function Carnivorous(pName, pEat, pPaws, pDisplace) {
        return _super.call(this, pName, pEat, pPaws, pDisplace) || this;
    }
    Carnivorous.prototype.setMaximumSpeed = function () {
        this.displace_KM = 90;
    };
    return Carnivorous;
}(classMammals_1.Mammals));
exports.Carnivorous = Carnivorous;

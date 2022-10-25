"use strict";
exports.__esModule = true;
exports.Mammals = void 0;
var Mammals = /** @class */ (function () {
    function Mammals(pName, pEat, pPaws, pDisplace) {
        this.name = pName;
        this.eat = pEat;
        this.paws = pPaws;
        this.displace_KM = pDisplace;
    }
    Mammals.prototype.getName = function () {
        return this.name;
    };
    Mammals.prototype.setName = function (paramName) {
        this.name = paramName;
    };
    Mammals.prototype.getEat = function () {
        return this.eat;
    };
    Mammals.prototype.setEat = function (paramEat) {
        this.eat = paramEat;
    };
    Mammals.prototype.getMaximumSpeed = function () {
        return this.displace_KM;
    };
    Mammals.prototype.setMaximumSpeed = function (paramDesplace) {
        this.displace_KM = paramDesplace;
    };
    Mammals.prototype.getPaws = function () {
        return this.paws;
    };
    Mammals.prototype.setPaws = function (paramPaws) {
        this.paws = paramPaws;
    };
    return Mammals;
}());
exports.Mammals = Mammals;

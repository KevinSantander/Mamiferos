"use strict";
exports.__esModule = true;
var classCarnivorous_1 = require("./class/classCarnivorous");
var classHerbivorous_1 = require("./class/classHerbivorous");
var classOmnivores_1 = require("./class/classOmnivores");
var carnivorous = new classCarnivorous_1.Carnivorous('Leon', 'cebra', 4, 100);
var herbivorous = new classHerbivorous_1.Herbivorous('Jirafa', 'vegetacion', 4, 70);
var omnivores = new classOmnivores_1.Omnivores('Chancho', 'carne y vejetales', 4, 20);
carnivorous.setMaximumSpeed();
herbivorous.setMaximumSpeed();
omnivores.setMaximumSpeed();
omnivores.setEat('vejetales');
console.log(carnivorous, herbivorous, omnivores);

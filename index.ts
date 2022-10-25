import { Mammals } from "./class/classMammals";
import { Carnivorous } from "./class/classCarnivorous";
import { Herbivorous } from "./class/classHerbivorous";
import { Omnivores } from "./class/classOmnivores";

let carnivorous = new Carnivorous('Leon','cebra',4,100);
let herbivorous = new Herbivorous('Jirafa','vegetacion',4,70);
let omnivores = new Omnivores('Chancho','carne y vejetales',4,20);

carnivorous.setMaximumSpeed();
herbivorous.getMaximumSpeed();
omnivores.setMaximumSpeed();
omnivores.setEat('vejetales');

console.log(carnivorous,herbivorous,omnivores);
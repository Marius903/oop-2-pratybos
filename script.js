import { Animal } from "./animal.js";
import { Dog } from "./dog.js";

// Sukuriame Animal objektą
const animal1 = new Animal("Katinas", 3);

console.log("ANIMAL OBJEKTAS:");
animal1.getInfo();

// Padidiname gyvūno amžių
animal1.increaseAge();

console.log("Po amžiaus padidinimo:");
animal1.getInfo();

console.log("----------------------");

// Sukuriame Dog objektą
const dog1 = new Dog("Reksas", 5, "Ruda", 4);

console.log("DOG OBJEKTAS:");
dog1.getInfo();

// Padidiname šuns amžių
dog1.increaseAge();

console.log("Po amžiaus padidinimo:");
dog1.getInfo();
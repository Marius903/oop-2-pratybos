import { Animal } from "./animal.js";

export class Dog extends Animal {
    constructor(name, age, furColor, legs) {
        super(name, age);

        this.furColor = furColor;
        this.legs = legs;
    }

    // Grąžina visą informaciją apie šunį
    getInfo() {
        const info = `Vardas: ${this.name}, Amžius: ${this.age}, Kailio spalva: ${this.furColor}, Kojų kiekis: ${this.legs}`;

        console.log(info);
        return info;
    }
}
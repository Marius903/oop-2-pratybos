export class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Padidina gyvūno amžių vieneriais metais
    increaseAge() {
        this.age++;
    }

    // Grąžina ir atspausdina informaciją
    getInfo() {
        const info = `Vardas: ${this.name}, Amžius: ${this.age}`;
        console.log(info);
        return info;
    }
}
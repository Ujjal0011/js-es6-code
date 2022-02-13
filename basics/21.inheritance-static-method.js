'use strict';

class Vehicle {
    constructor(brand, price, color){
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    setBrand (brand) {this.brand = brand;}
    getBrand () {return this.brand;}

    setPrice (price) {this.price = price;}
    getPrice () {return this.price;}

    setColor (color) {this.color = color;}
    getColor () {return this.color;}
}

class Car extends Vehicle {
    constructor (brand, price, color, size) {
        super(brand, price, color);
        this.size = size;
    }

    static setSize (size) {this.size = size;}
    static getSize () {return this.size;}
}

const myCar = new Car('BMW', 102525, 'Gray', 'Family Car');
myCar.setBrand('Bugatty');
myCar.setPrice(2025125);
myCar.setColor('Dark Gray');
Car.setSize('Small Truck');

console.log(`
    Car Name: ${myCar.getBrand()}
    Car Price: ${myCar.getPrice()}
    Car Color: ${myCar.getColor()}
    Car Cetagory: ${Car.getSize()}
`);
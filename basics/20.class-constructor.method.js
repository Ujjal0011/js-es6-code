'use strict';

class Person {
    
    constructor (name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    setName (name) {this.name = name;}
    getName () {return this.name;}

    setAge (age) {this.age = age;}
    getAge () {return this.age;}

    setAddress (address) {this.address = address;}
    getAddress () {return this.address;}
}

const ujjal = new Person('Ujjal Chowdhury', 35, '366/4. Modhubag, Moghbazar, Dhaka - 1217.');
ujjal.setName('Alfred Romel');
ujjal.setAge(36);
ujjal.setAddress('364/A, Modhubag, MOghbazar, Dhaka - 217.');

console.log(`
    Name: ${ujjal.getName()}
    Age: ${ujjal.getAge()}
    Address: ${ujjal.getAddress()}
`);

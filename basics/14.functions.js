'use strict';

// Simple Function
function adding() {
    const a = 10;
    const b = 20;
    const total = a + b;
    console.log(total);
}
adding();


// Parameterized Function
function adding1(a, b) {
    const total = a + b;
    console.log(total);
}
adding(10, 30);

// Rest Parameters
let total = 0;
function adding2(...n) {
    for (let i of n) {
        total += i;
    }
    console.log(total);
}
adding2(10, 20);

// Returning Functions
let myTotal = 0;
function adding3(...n) {
    for (let i of n) {
        myTotal += i;
    }
    return myTotal;
}
const result = adding3(10, 20);
console.log(result);

// Anonymous Function
const herTotal = function () {
    const a = 10;
    const b = 20;
    const total = a + b;
    console.log(total);
}
herTotal();

// Parameterizes Anonymous Function
let ourTotal = 0;
const sum = function (...n) {
    for (let i of n) {
        ourTotal += i;
    }
    return ourTotal;
}
const myResult = sum(10, 20);
console.log(myResult);

// Arrow Function
let theirTotal = 0;
const mySum = (...n) => {
    for (let i of n) {
        theirTotal += i;
    }
    return theirTotal;
}
console.log(mySum(10, 20));

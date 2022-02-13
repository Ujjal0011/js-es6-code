'use strict';

let yourName = 'Ujjal'; // global scope

function greetings() {
    let greetText = 'Hello ';   // local scope
    console.log(greetText + yourName);
}
greetings();

console.log(yourName);
// console.log(greetText); //should not work

'use strict';

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566
};

for (let propertyName in person) {
    console.log(propertyName + ' : ' + person[propertyName]);
}
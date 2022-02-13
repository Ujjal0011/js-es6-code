'use strict';

const myMap = new Map();

myMap.set('key1', 'Bangladesh');
myMap.set('key2', 'Russia');
myMap.set('key3', 'India');
myMap.set('key4', 'Pakistan');
myMap.set('key5', 'Nepal');
myMap.set('key6', 'Bhutan');

// getting all keys of the map
for (let key of myMap.keys()) {
    console.log('Keys are: ' + key);
}

// getting all values of the map
for (let value of myMap.values()) {
    console.log('Values are: ' + value);
}

// delete (key)

// get (key)

// clear ()

// has (key)
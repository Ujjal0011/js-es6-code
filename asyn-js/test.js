/*
place order         ---> 2 sec
cut the fruit       ---> 2 sec
add water and ice   ---> 1 sec
start the machine   ---> 1 sec
select container    ---> 2 sec
select toppings     ---> 3 sec
serve ice cream     ---> 2 sec
*/

const stocks = {
    fruits: [ 'strawberry', 'grapes', 'banana' ],
    holder: [ 'cone', 'cup', 'stick' ],
    toppings: [ 'chocolate', 'peanutes' ],
    liquid: [ 'water', 'ice' ]
};

let shopIsOpen = true;

const order = ((work, time) => {
    return new Promise((resolve, reject) => {
        if (shopIsOpen) {
            resolve(work());
        } else {
            reject('Shop is closed!!!');
        }
    }, time);
});

order();
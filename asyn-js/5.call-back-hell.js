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

const order = ( ( item, callback_work ) => {
    setTimeout((item) => {
        console.log( `${stocks.fruits[2]} Place Order` );
    }, 2000);
    callback_work();
});

const work = (() => {
    setTimeout(() => {
        // cut the fruit
        console.log(`cut the ${stocks.fruits[2]}`);
        // add the water and ice
        setTimeout(() => {
            console.log(`add the ${stocks.liquid[0]} and ${stocks.liquid[1]}`);
            // start the machine
            setTimeout(() => {
                console.log(`start the machine`);
                // select container
                setTimeout(() => {
                    console.log(`select ${stocks.holder[0]}`);
                    // select toppings
                    setTimeout(() => {
                        console.log(`select ${stocks.toppings[1]}`);
                        // serve ice-cream
                        setTimeout(() => {
                            console.log(`serve ice-cream.`);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 1000);
        }, 2000);
    }, 2000);
});

order(stocks.fruits[2], work);
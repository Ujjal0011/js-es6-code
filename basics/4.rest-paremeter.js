'use strict';

function calculation(a, b, ...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    console.log(total);
}
calculation(10, 20, 1, 2, 3, 4, 5); // 10, 20 will not count
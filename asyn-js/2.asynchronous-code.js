// asynchronous means 10 jobs 10 hands. SO 10 jobs will done by 10 different hand.

console.log('step 1');
console.log('step 2');
console.log('step 3');
setTimeout(() => {
    console.log('step 4 (4sec delay)');
}, 4000);
console.log('step 5');
console.log('step 6');
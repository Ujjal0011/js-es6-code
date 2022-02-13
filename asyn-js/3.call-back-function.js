// call back function.

function one(call_back) {
    call_back();
    console.log('calling function one()');
}

function two() {
    console.log('calling function two()');
}

one(two);
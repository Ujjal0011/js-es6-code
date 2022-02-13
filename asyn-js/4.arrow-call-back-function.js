// call back function.

const one = (call_back) => {
    call_back();
    console.log('calling function one()');
}

const two = () => {
    console.log('calling function two()');
}

one(two);
// create a function name canPay()
function canPay(changearray, totaldue) {
    // if the input array is empty then return an message
    if (changearray.length == 0) {
        return 'this is an empty array';
    }

    let sum = 0;
    for (let i = 0; i < changearray.length; i++) {
        const element = changearray[i];
        sum += element;
    }
    console.log({ sum });
    // if the sum of the total array is greater or equal than totaldue then return a message
    if (sum >= totaldue) {
        return true;
    } else {
        return false;
    }


}

console.log(canPay([1, 2, 3], 5));
console.log(canPay([1, 2, 3], 10));
console.log(canPay([], 10));

// take a function which name is cubeNumber()
function cubeNumber(number) {
// return an error message if the given input is not a number.
    if (typeof number !== 'number') {
        return 'please provide a number';
    }

//convert the given input to cube and retrun the result from the function. 
    const result = Math.pow(number, 3);
    return result;

}

// check the given input.
console.log(cubeNumber(3));
console.log(cubeNumber(4));
console.log(cubeNumber('hello'));
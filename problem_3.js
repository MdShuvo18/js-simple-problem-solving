// take a function name sortMaker()

function sortMaker(arr) {
    const [a, b] = arr;
    // if the given input is negative 
    if (a < 0 || b < 0) {
        return 'Invalid Input'
    }
    // if the given input is equal each other
    if (a == b) {
        return 'Equal';
    }

    if (a > b) {
        return [a, b];
    } else {
        return [b, a];
    }
}
console.log(sortMaker([2, 3]));


// create a function name findAddress()
function findAddress(obj) {
    const street = obj.street || '__'; //if the value is not defind then printed the doubled
    const house = obj.house || '__';
    const society = obj.society || '__';
    const str = street + ',' + house + ',' + society;
    return str;
}

console.log(findAddress({ street: 10, house: '10A', society: 'Earth parfect' }));
console.log(findAddress({ street: 10, society: 'Earth parfect' }));
console.log(findAddress({ society: 'Earth parfect' }));

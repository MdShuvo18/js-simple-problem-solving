
function calculateMoney(ticketSale) {
    // if given input is not a positive number then return an error message
    if (ticketSale < 0) {
        return 'Baker vai apni vul number press korechen';
    }
    const result = (ticketSale * 120) - (500 + (8 * 50));
    return result;
}



function checkName(name) {
    // if input is not string type then return an error message
    if (typeof name !== 'string') {
        return 'invalid';
    }
    // convert the given input name to lowerCase
    const convertInputName = name.toLowerCase();

    const lastWord = convertInputName.slice(-1);
    if (['a', 'y', 'i', 'e', 'o', 'u', 'w'].includes(lastWord)) {
        return 'Good Name';
    } else {
        return 'Bad Name';
    }
}



function deleteInvalids(array) {
    // if the input value is not an array then return an error message
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }

    const finalResult = array.filter(function (item) {
        if (typeof item === "number" && !isNaN(item)) {
            return item;
        }
    })
    return finalResult;
}



function password(obj) {
    // given obj property name { name: “kolimuddin” , birthYear: 1999 , siteName: “google” }
    // check the property value
    if (typeof obj.name !== 'string' || typeof obj.siteName !== 'string' || typeof obj.birthYear !== 'number' || typeof obj !== 'object') {
        return 'invalid';
    }

    // if the brithyear length is not taken 4 digit
    if (obj.birthYear.toString().length !== 4) {
        return 'invalid';
    }

    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const finalObj = siteName + '#' + name + '@' + birthYear;
    return finalObj;

}



function monthlySavings(arr, livingCost) {
    // if the parameters are not array and number then return an error message
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'invalid input';
    }

    let totalIncome = 0;
    for (const item of arr) {

        let taxtPaid;
        if (item >= 3000) {
            taxtPaid = item * 0.8; //after cuting 20% of tax
        }
        else {
            taxtPaid = item;
        }
        totalIncome += taxtPaid;
    }

    const savings = totalIncome - livingCost;

    if (savings >= 0) {
        return savings;
    } else {
        return 'earn more';
    }
}


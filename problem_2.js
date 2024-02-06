// take function name matchFinder(), which has two string inputs
function matchFinder(string1, string2){
//return an error message if the input is not string
 if (typeof string1!=='string' || typeof string2!=='string') {
     return 'please provide a string';
   }

// check the input is in includes or not in includes.
const result = string1.includes(string2);
return result;
}

// console and check the input value.
console.log(matchFinder('john doe','joh'));
console.log(matchFinder('martin guptil','tin'));
console.log(matchFinder('herry potter',8));
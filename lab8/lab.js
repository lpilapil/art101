/*
* Author: Luke Pilapil <lpilapil@ucsc.edu>
* Created: October 28, 2021
* License: Public Domain
*/

function isEven(x){
    return (x % 2 == 0);
}

console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

var array = [100, 53, 2, 65, 23, 13, 65, 20]
console.log("MyArray", array);

var result = array.map(isEven);
console.log("Test of evenness of my array", result);

var result = array.map(function(x){
return x ** 0.5;
})

console.log("Squareroot of array:", result);

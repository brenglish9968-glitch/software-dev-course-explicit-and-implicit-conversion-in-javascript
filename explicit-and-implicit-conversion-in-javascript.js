/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

let result = "5" - 2;
console.log("The result is: " + result);// 3

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");// This is valid!
}

let age = "25";
let totalAge = Number(age) + Number("5");// Explicitly converting the string "25" and "5" to numbers before addition
console.log("Total Age: " + totalAge);// Total Age: 30

console.log(null == undefined); // true, because both are considered equal in loose equality comparison

let result = Number("Apple");
console.log(result); // NaN, because "Apple" cannot be converted to a number
console.log(typeof result); // "number", because NaN is of type number

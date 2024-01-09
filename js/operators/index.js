//console.log("Hello WORLD"); // REPL

// Type casting => converson of data type from one data to another

// String to Number => Number(year)
// Number to String => String(year)

// Write a program that store the user inform about their birth year and calculate age

const year = prompt("What is your birth year?"); // typecasting
const age = 2024 - Number(year);
console.log(age);

// Statement

// age
// below 10 = child
// below 18 = teen
// above 18 = adult
// exact or above 60 = old

// if (age > 18) {
//   alert("You are adult");
// } else {
//   alert("You are children");
// }

// switch (age > 18) {
//   case true:
//     alert("You are adult");
//     break;
//   case false:
//     alert("you are child");
//     break;
//   default:
//     alert("Invalid Data");
// }

// ternary Operator

//  variable =  condition  ? true statement  : false statement
// const result = age > 18 ? alert("You are adult") : alert("You are child");

// Write a program that accept your name and
// show alert message saying "Welcome Admin"
// else say "Welcome Guest"

// Pseudo code

// variable assign using prompt
// variable check if variable data  === your name; alert admin else guest

// Write a program that prints the if its weekday or weekend based on day input using switch case

// Monday - Friday => print weekday
// Saturday - Sunday => print weekend

// switch (condition) {
//   case value1:
//     // a block of code to execute
//     break;
//   default:
//     alert("Invalid Data");
// }

// const day = prompt("Enter number from 1 to 7 representing a week");

// switch (Number(day)) {
//   case 1:
//     console.log("Weekend");
//     break;
//   case 2:
//     console.log("Weekday");
//     break;
//   case 3:
//     console.log("Weekday");
//     break;
//   case 4:
//     console.log("Weekday");
//     break;
//   case 5:
//     console.log("Weekday");
//     break;
//   case 6:
//     console.log("Weekday");
//     break;
//   case 7:
//     console.log("Weekend");
//     break;
//   default:
//     console.log("Invalid Day");
// }

const isAdult = true;

if (!isAdult) {
  alert("You are child");
} else {
  alert("You are adult");
}

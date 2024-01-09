console.log("Hello from function chapter");

//ES5

// function define
function sayHi(name) {
  console.log("hello ", name);
}
function checkEven(uff) {
  const result = uff % 2; // Logic
  if (result === 0) {
    console.log("Even");
  } else {
    console.log("odd");
  }
}
function add(a, b, c) {
  console.log(a + b + c);
}
function subtraction(a, b) {
  const result = a - b;
  return result;
}

// run
sayHi("basanti");
checkEven(11);
add(1, 2, 3);
const resp = subtraction(10, 2);

console.log(resp);

// ES6

//ES5

// input
function multiply(num1, num2) {
  // logic + Output
  const result = num1 * num2; // logic
  return result; // output
}

const mul = multiply(2, 2);
console.log(mul);

// Write a function to find the area of square

function sq(a) {
  return a * a;
  //   const res = Math.pow(a, a);
  //   return res;
}
// write a function to get the fullname of the person using parameter first name, mid name and last name
// EG; ("raktim", "kumar",  "shrestha") => "raktim kumar shrestha"

function fullName(fname, mname, lname) {
  //   const res = fname + " " + mname + " " + lname; //raktimkumarshresta
  //   return res;
  //Option 2
  //   const res = `${fname} ${mname} ${lname}`;
  //   return res;
  // Option 3 (inbuilt Function)
  //   const res = fname.concat(" ", mname, " ", lname);
  //   return res;
}

// concat, includes, charAt, indexOf, replace,
// replaceAll, toUpperCase, toLowerCase, substring, split, slice

function testString(input) {
  return input.toUpperCase();
}

const results = testString("raktim");
console.log(results);
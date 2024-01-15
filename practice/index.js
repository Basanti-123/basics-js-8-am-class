//

/*const today = new Date(); // iso string
//console.log(today);


 const giveMeYear = today.getFullYear();
// console.log(today, giveMeYear);

const myToday = new Date(1705400098);
console.log({myToday});

const setMyYear = today.setFullYear(2023)
console.log(today, giveMeYear,setMyYear)*/

// practice month get-set, day get-set

/*const today = new Date();
const month = today.setMonth(4);
const day = today.setDate(14);
console.log({ month, day }); */

/*const month = today.getMonth();
const day = today.getDay();
console.log({ month, day });*/

// const myToday = new Date("2023-01-02");
// console.log(myToday);

// const date = today.getDate();
// const year = today.getFullYear();
// const month = today.getMonth();
// const hour = today.getHours();
// const sec = today.getSeconds();

//console.log({ date, year, month, hour, sec });

// const setYear = today.setFullYear(2020);
// const setMonth = today.setMonth(2);
// console.log({ setYear, setMonth });

//data formate

// ITC =>TZ (timezone)
//IOS = TZ+00:00
// Unix =Seconds tick

const arr = [{ name: "ram" }, { name: "bas" }, { name: "dep" }];
const first = arr[0];
const [a, b, ...rest] = arr;

console.log([arr.length - 1]);

// Immutable js => filter, map, reduce, every, some, find

const isValid = arr.every((item) => item.name.split("")[0] === "r");
const isSomeValid = arr.some((item) => item.name.split("")[0] === "r");
console.log(isSomeValid, isValid);

// function

const checkArrayStartWithR = (ram) => {
  return ram.every((item) => item.name.split("")[0] === "r");
};

const fun = checkArrayStartWithR(arr);
console.log({ fun });

// write a js function to convert the string into the properCase
// (eg: 'The fox is Sly' => "The fox is Sly")

// steps
/* 1. define the function name with one single parameter; string

2. call/execute that function

3. convert the string into array,split("")  // ["the", "fox", "is"]

4. loop inside the array using .map()  // "the"

5. split is again using.split("")  // ['t','h' 'e']
6. [0].toUpperCase() // ['t', 'h', 'e']
7. arr.join("")
8. .join(" ")
9. return the string



*/



const properCase = (string) => {};

properCase("the fox is fly")
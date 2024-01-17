const getFormData = () => {
  const name = document.getElementById("name").value;
  document.getElementById("result").innerHTML = name;
};
/*const time = new Date();
const year = time.getFullYear();
const month = time.getMonth();
const tarik = time.getDate();
const day = time.getDay();
const watchMin = time.getMinutes();
const watchHour = time.getHours();
const watchSec = time.getSeconds();

console.log({year,month,tarik,day,watchMin,watchHour,watchSec})*/

// Get the current time in 8:50:60

/*const getTime = () => {
  const time = new Date();

  // // Time
  const watchHour = time.getHours(); //8:48:01
  const watchMin = time.getMinutes(); // 48
  const watchSec = time.getSeconds();
  const currentTime = String("Tuesday, 16 jan 2024, ").concat(
    watchHour,
    ":",
    watchMin,
    ":",
    watchSec,
    "AM"
  );
  document.getElementById("clock").innerHTML = currentTime;
};
setInterval(() => {
  console.log("Interval");
  getTime();
}, 1000);*/

const userRoles = ["adin", "vendor"];
const allowedRoles = ["inventoryManager", "vendor"];

const checkRole = (userRoles, allowedRoles) => {
  return userRoles.some((role) => allowedRoles.includes(role)); // [false, true]
};

const check = checkRole(userRoles, allowedRoles);
console.log({ check });

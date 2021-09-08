/*
Create an object with three items in it, then write a JavaScript function that accepts an object and tells you the length
 (tells you how many items are in it) of the object.

*/

function findLength(obj) {
  let size = 0;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      size += 1;
    }
  }
  return size;
}

let cars = { name: "Ford", models: ["Fiesta", "Focus", "Mustang"], year: 2029 };

console.log(findLength(cars));

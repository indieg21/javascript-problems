/*

Write a JavaScript program to sort the items of an array.

Example array: var myArray = [-3,8,7,6,5,-4,3,2,1];

*/

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let myArray = [-3, 8, 7, 6, 4, 8, 5, 7, -1, -4, 1, 2];

console.log(sortArray(myArray));

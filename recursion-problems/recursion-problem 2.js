/* Write a JavaScript program to compute the sum of an array of integers.
 */

function add(arr) {
  if (arr.length == 1) return arr[0]; // base case
  let sum = arr[0] + add(arr.slice(1)); // recurse
  return sum;
}

let arr = [5, 10, 20, 5, 4, 6];
console.log(add(arr));

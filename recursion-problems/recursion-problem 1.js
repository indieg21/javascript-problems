/* Write a JavaScript function to calculate the factorial of a number.

 function fact(num){  
 let f = 1

 for(let i =1; i<=num; i++){
f = f*i
 console.log(f)
 }

 }


 fact(10)

 */

function fact(num) {
  if (num === 0) {
    return 1;
  }
  return num * fact(num - 1);
}
console.log(fact(10));

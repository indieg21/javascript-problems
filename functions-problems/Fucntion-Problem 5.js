/*Write a JavaScript program that iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for 
the multiples of five print "Buzz". For numbers that are multiples of 
both three and five print "FizzBuzz".

Write a fuction named fizzBuzz with an empty Parameter

Create a for loop to loop from 1 to 100
If condition will check to if index (i) divides by 3 and 5 at the same time. How many times does 3 and 5 goes into 1 through 
100. In this case it will go into both numbers together 6 times.

If the condition is true it will return (console.log) fizzBuzz

Else if statement will check if it only divided by 3. It will return (console.log) fizz

Else if statement will check if it only divided by 5. It will return (console.log) Buzz

Finally we will run the function so that all the code inside the funciton will run.

*/

function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
  }
}

fizzBuzz();

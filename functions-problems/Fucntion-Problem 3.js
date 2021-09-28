/*
Write a JavaScript function that
accepts two arguments, a string and a letter and the function will 
count the number of occurrences of the specified letter within the string. 

Define/create a function w/ two paramenter, a string & a letter.

Create a varaible that stores the results of str.split. This mehtod will return the array of characters. It will split
every character. The "" is an empty quote allowing no space between that character.

Create a vaiaible that stores 0. This variable acts as a counter to count every time character "o" is found

 Create a for Loop to loop the array and everytime it will compare each character to the 2nd paramenter known as the letter
 

 Let index = 0 will set the varible; i must be less than arr.length(means the number of characters must be less than
  the length of the arr variable)

  if statement checks if char is equal to the letter. If condition is true it will increase the counter "count" by 1.

  Once it is done checking, it will return count.


*/

function countStr(str, a) {
  let arr = str.split("");

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i]; 
    if (char === a) {
      count += 1;
    }
  }
  return count;
}
console.log(countStr("Woooooooooord", "o"));

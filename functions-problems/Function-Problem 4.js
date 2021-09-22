/*
Write a JavaScript function that checks whether a passed string is palindrome or not.
A palindrome is a word, phrase, or sequence that reads the same 
backward as forward, e.g., madam or nurses run.

step 1: write fucntion that passes string 
step 2: write a variable for empty string
step 3: write a for loop for reversing string

create a function named palindrome with a Paramenter of a String
create a varible called reverse that holds an empty string

create a for Loop to loop the string and everytime it will reverse every character in the string

reverse = string(index)to start looping at the
    start of the index. Which will be M
 

  if statement will check the reverse string if the string reverses each character it will read the exact same backwards
  the return will be true, else if it returns and not the same reversed it will return false
  */


 

function palindrome(str) {
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    reverse = str[i] + reverse;
  }
  if (reverse === str) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("madam"));

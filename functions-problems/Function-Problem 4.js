
/*
Write a JavaScript function that checks whether a passed string is palindrome or not.
A palindrome is a word, phrase, or sequence that reads the same 
backward as forward, e.g., madam or nurses run.

step 1: write fucntion that passes string 
step 2: write a variable for empty string
step 3: write a for loop for reversing string
*/

function palindrome(str) {
  
    let reverse = ""
  
    for (let i = 0; i < str.length; i++) {
    
    reverse = str[i]+reverse
      
      
  }
    
    if(reverse === str){
      
        return true;
        
      }
    else{
      
      return false;
    }
   
  }
  console.log(palindrome("madam"))
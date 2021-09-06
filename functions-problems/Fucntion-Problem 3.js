
/*
Write a JavaScript function that
accepts two arguments, a string and a letter and the function will 
count the number of occurrences of the specified letter within the string. 

step 1: 

*/

function countStr(str, a) {
  
    let arr = str.split("")
    
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
    
      let char = arr[i]
      if(char === a){
      count += 1
        
        
      }
    
  }
    return count;
  }
  console.log(countStr("Woooooooooord", "o"))
  
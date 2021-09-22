/*
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

Hint: use the "spilt" method and a "for" loop.
step 1: define a JavaScript Function that accepts a string as a parmeter 
step 2: find the longest word within the string.
step 3: use the split method and a "for" loop.
step 4: create the split giving a vaule of 0
step 5: create a for loop to loop index with using .lenth as longestWord.length 
step 6: return longest word
step 7: run log 

Details

 
 I need to find the longest word w/in the string
 Create a Variable that will define str.split. The split method will return 
 array words.
 Next create a variable w/empty string to eventually store the longestWord
 
 Create a for loop to loop through the array & in every loop it will compare
 the current element with longest word by checking the .length. If the current
 element length is greater than the longestWord.length then the current element
 will be assigned to the longestWord.
*/

function findTheLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(findTheLongestWord("I love furry puppies."));

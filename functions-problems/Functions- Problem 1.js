/*
step 1: define a JavaScript Function that accepts a string as a parmeter 
step 2: find the longest word within the string.
step 3: use the split method and a "for" loop.
step 4: create the split giving a vaule of 0
step 5: create a for loop to loop index with using .lenth as longestWord.length 
step 6: return longest word
step 7: run log 


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

/* Write a JavaScript function that accepts a string as a parameter and
//returns the number of vowels in  that string.
/*
step 1: define a JavaScript function that accepts a string as a parameter
step 2: split the string passed in, turn it into an array of each individual letter,
step 3: define a variable called count and set the inital value to be equal to 0;
step 4: define a variable that defines what a vowel is. an array of vowels
step 5: start looping through our array of letters
step 6: check if the current letter in our loop is a vowel
*/

function countVowels(str) {
  let newStr = str.toLowerCase();
  let arr = newStr.split("");
  let vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vowel.includes((a = arr[i]))) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countVowels("Beautiful day todaAAAy"));

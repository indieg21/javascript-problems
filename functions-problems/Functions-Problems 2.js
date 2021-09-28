/* Write a JavaScript function that accepts a string as a parameter and
//returns the number of vowels in  that string.
/*
step 1: define a JavaScript function that accepts a string as a parameter
step 2: split the string passed in, turn it into an array of each individual letter,
step 3: define a variable called count and set the inital value to be equal to 0;
step 4: define a variable that defines what a vowel is. an array of vowels
step 5: start looping through our array of letters
step 6: check if the current letter in our loop is a vowel
Details

  Define/create a function w/ paramenter that is a string.
 I need to find the vowel count w/in the string
 To do this I need to convert my str into lower case. Why? B/c all my vowels 
 are lower-case and it looks better.
 Next I want to convert my newStr to an array using the split method.
 b/c this will go throuhg my for loop.
 Let count acts as a counter of the element and is set as 0 and count will
 go up by 1 everytime we find a vowel. 
 
 The for loop will loop through the arr. Next checking w/ "if"
 to verify the vowels against each element inside the arr.
 
 Once the for loop is complete checking each element the function will 
 return the count
*/

function countVowels(str) {
  let newStr = str.toLowerCase();
  let arr = newStr.split("");
  let vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vowel.includes( arr[i])) {
      count = count + 1;
    }
  }
  return count;
}
console.log(countVowels("Beautiful day todaAAAy"));

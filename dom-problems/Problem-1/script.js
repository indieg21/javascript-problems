/*
Create a basic HTML page with a P element on it.

Then, write a JavaScript program to set the background color of that paragraph.

step 1: Create HTML & Js Doc(include script/scr js doc)
step 2: Add P element w/loreum fill
step 3: Add id selector and assign it to color
step 4: Create Variable for bgColor in js
step 5: Use getElementById mehtod to access the Id color from dom
step 6: Assign bgColor ligtblue
step 7: Fix maxWidth of p 50% of doc


*/

let bgColor = document.getElementById("color");
bgColor.style.backgroundColor = "lightblue";
bgColor.style.maxWidth = "50%";

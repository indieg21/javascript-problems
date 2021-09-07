/*
Create a P element with a link inside.

Then, write a JavaScript function to get the HREF attribute of the link.

step 1: Read the value from href attribute and store it in varible
step 2: Display the value to new paragraph w/id of link

*/

let srclink = document.getElementById("scrlink").firstElementChild.getAttribute("href")
 document.getElementById("link").innerHTML = srclink

console.log(srclink)
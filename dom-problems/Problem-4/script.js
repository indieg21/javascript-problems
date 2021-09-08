// Create an HTML page with a dropdown list with three items in it, then write a JavaScript function that displays the number of items and displays the item in the list.

// So, you should create an HTML file with a dropdown, and a button next to it.

// When someone clicks that button, it will run your JavaScript function that you'll write in your JavaScript file, which uses a pop-up modal to display the number of items, and the actual items in the list.

// Google "javascript pop up" to help you see what code to write for the pop up modal.

// If you Google "javascript get options from select", here's the first link that pops up: https://www.w3schools.com/jsref/coll_select_options.asp

// If you read through that and go to the example of how to get the text value of each option, using the index (since the dropdown "options" will give you an array of all the options in your dropdown), you'll be able to use that logic to grab the text.

// Look into the "javascript array map" method, so you can use that to grab all the text values into an array, and you can then turn that array of the values into a string to be displayed in your pop up.

// Try to work on this on your own, and let me know if you run into any issues.

let btn = document.getElementById("btn");
btn.addEventListener("click", displayCar);

function displayCar() {
  let arrList = Array.from(document.querySelector("#cars").options);
  document.write("Number of cars: " + arrList.length + "<br />");
  arrList.forEach((element) => {
    document.write(element.text + "<br />");
  });
}

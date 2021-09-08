/*Create an HTML page with a dropdown list with three items in it, then write a 
JavaScript function that displays the number of items and displays the item in the list.
Create an HTML file with a dropdown, and a button next to it.
*/

let btn = document.getElementById("btn");
btn.addEventListener("click", displayCar);

function displayCar() {
  let arrList = Array.from(document.querySelector("#cars").options);
  document.write("Number of cars: " + arrList.length + "<br />");
  arrList.forEach((element) => {
    document.write(element.text + "<br />");
  });
}

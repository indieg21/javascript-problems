/*

Create a basic HTML page with a table and two rows in it.

Then, write a JavaScript function to add rows to a table.

*/
function insert_Row()
{
let x=document.getElementById("table").insertRow(0);
let y = x.insertCell(0);
let z = x.insertCell(1);
y.innerHTML="New Cell1";
z.innerHTML="New Cell2";
}



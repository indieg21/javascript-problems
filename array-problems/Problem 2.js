/*
Write a simple JavaScript program to join all elements of the following array into a string.

Example array: var my Color=["Red", "Green", "White", "Black"];
*/

function joinString() {

    var color = " "

    var myColor = ["Red", "Green", "White", "Black"];

    for( let i = 0; i < myColor.length; i++){

        color += myColor[i] + " ";
    }

    return color
}

console.log(joinString())
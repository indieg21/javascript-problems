/* Write a JavaScript function that takes in two parameters, 
an array and a number (n), and return the first n elements of that array.

Example: If I pass in an array and the number 2, your function returns 
the first 2 elements in that arrays.
*/


function countNumber(array, n) {

    for(let i = 0; i < n; i++ ){

        console.log(array[i])
    }


}

countNumber([5, 3, 4, 8], 2)
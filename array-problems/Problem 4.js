/*
Write a JavaScript program to remove duplicate items from an array (consider case sensitivity).

step 1: program to remove duplicate value from an array
step 2: loop through array
step 3: calling the function
step 4: passing array argument

Example array: [1,2,2,4,5,4,7,8,7,3,6]
*/



function removeDup(arr){
    
    let dupArr = [];
    
    
    for(let i of arr) {
        if(dupArr.indexOf(i) === -1) {
            dupArr.push(i);
        }
    }
    console.log(dupArr);
}

let array = [1,2,2,4,5,4,7,8,7,3,6];

removeDup(array);

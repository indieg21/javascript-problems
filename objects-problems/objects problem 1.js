/*
Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.

Your JavaScript function should take in two parameters, the object and the key/property you want to delete.
*/

function deleteAge(obj, key) {

    delete obj.key;
   console.log(obj.key)
   return obj
 }
 
 
 let person = {
     firstName: "John",
     lastName: "Doe",
     age: 50,
     eyeColor: "blue"
   };
 
 deleteAge(person, "age");
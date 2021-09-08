/*

Create an array of people objects with first name, last name, and age, then write a 
JavaScript program to display the first and last names of all the people.
Your function should take in an object and return the the values above.
*/

function personDetails(obj) {
  obj.forEach((element) => {
    let personName =
      element.firstName + " " + element.lastName + " " + element.age;
    console.log(personName);
  });
}

let person = [
  { firstName: "Mike", lastName: "Core", age: 30 },
  { firstName: "Chris", lastName: "Moe", age: 10 },
  { firstName: "John", lastName: "Doe", age: 20 },
];

personDetails(person);

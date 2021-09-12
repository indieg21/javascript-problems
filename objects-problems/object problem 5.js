// Write a JavaScript function to sort the following array of objects by title value.

// Hint: Read about the JavaScript sort method.

// Example array: [ 

//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

//    ];

function sortObj(arr) {
    arr.sort((a, b) => {
    let comparison = 0;
      if (a.title < b.title) return -1
      return a.title > b.title ? 1 : 0
    })
    
    return arr
    }
    
    
    
    
     let array = [ 
    
       { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    
       { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    
       { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    
       ];
    
    
    console.log(sortObj(array))
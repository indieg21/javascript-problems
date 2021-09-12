// Create an object, then write a JavaScript function that checks whether an object contains the specified key.


function checkKey(obj, key) {
    return obj.hasOwnProperty(key)
    }
    
    const car = {type:"Fiat", model:"500", color:"white"};
    
    
    console.log(checkKey(car, "color"))
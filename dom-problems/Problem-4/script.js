function displayList(dropDown) {

    let listOptions = dropDown.Options


    let listItem = document.getElementById("listItem");
    
    for(let i = 0; i < listOptions.length; i++) {

        listItem.innerHTML = listOptions[i].value

        
    }

    document.getElementById("count").innerHTML = "count:" + listOptions.length;


}

let countCars = document.getElementById("cars");
displayList(countCars)
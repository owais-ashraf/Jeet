let fruitName = prompt("Enter Apple or Mango or Kiwi to check the colour");

        if (fruitName == "Apple") {
            console.log('Apple colour is red')
        } else if (fruitName == "Mango") {
            console.log('Mango colour is yellow')
        } else if (fruitName == "Kiwi") {    
            console.log('Kiwi colour is green')
        } else {
            console.log("Please enter correct fruit")
        }


let fruitColour = prompt("Enter a fruit");

switch (fruitColour) {
    case 'Apple':
            console.log("Apple : Red")
            break;
    case 'Banana':
            console.log("Banana : Yellow")
            break;
        
    default:
        console.log('Incorrect fruit')
        break;
}



    
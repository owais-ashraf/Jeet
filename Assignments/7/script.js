var names = ["Ali", "Asad","Sadaf","Saad","das","fahad","fasi","adnan","jamal","kali"]
console.log(names)


let myArray = ["Toyota","Honda","BMW","Nissan","Audi","Isuzu","Tata","Kia"]
function arr(myArray){
    return myArray;
}
var cars = arr(myArray)
console.log(cars)


function sumOfNum(arr){
    let sum = 0;
    for(let a of arr)
        sum += a;
        return sum;
    
}
console.log(sumOfNum([2,3,4]))
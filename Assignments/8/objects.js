//Object literal syntax 

let person = {
    firstName : "Owais",
    lastName : "Ashraf ",
    age : 28,
    email : "Owais.ashraf72@gmail.com",
    address : {
        street : "Jackson",
        city : "Karachi",
        state : "Sindh",
        zipCode : 73500,
    }
}

//This function retrun the full Name of person 
function getFullName(){
    var fullName = person.firstName + " " + person.lastName;
    return fullName; 
}
console.log(getFullName())


//This function update the person email 
function updateEmail(newEmail){
    person.email = "zayyan72@gmail.com";
    newEmail = person.email
}
updateEmail();


//this retrun person address which is object as a string  
const newAdd = Object.values(person.address);
console.log(newAdd.toString())


//update person address
person.address = {
    street : "Gulshan",
    city : "Lahore",
    state : "Punjab",
    zipCode : 68955,   
}
console.log(person)

//array of person object
const newPerson =  Object.entries(person);   
console.log(newPerson)


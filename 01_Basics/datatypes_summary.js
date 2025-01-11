// Primitve Datatypes
// Actually these primitve types are of call by value , means when we copy them from a place to another place then their copy gives to memory and changes done in their copy not in their original data .  
 
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

// JS is dynamically typed language or Statically typed language ?? ===> So , JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

const score = 100
const scoreValue = 100.3
const isLoggedIn = false 
const outsidetemp = null
let userEmail;
// console.log(typeof userEmail);

const id = Symbol('121')
const id2 = Symbol('121')
// Symbol works like that if we pass same value , but the result we get is different 
// console.log(id === id2);  //gives false

const bigNumber = 43785435437575843n

// Reference (Non - Primitive)
//These are the values of which their reference is directly allocated in memory. 

// Arrays , Objects , Functions 

const heros = ["shaktiman", "naagraj" , "doga"];

let myObj ={
    name :"Pulkit",
    age: 19
}


const myfunction = function(){
    console.log("Hello World");
}
myfunction();

// console.log(typeof bigNumber);   
// We can check the type of a datatype like this 


//**************MEMORY ***************//

// Memory are of two type :- 1. Stack Memory (Primitive datatypes)
                         //  2. Heap Memory  (Non - Primitive datatypes)


// It means agr koi bhi memory stack m hogi toh change krne pr copy m change hoga , original m nhi .
// or agr koi memory heap m hai toh uska reference milega toh original value m change hoga agr dusre variable s usko change krte hai toh .

let myName = "pulkityadav"
let anothername = myName

anothername = "Pawanyadav"

// console.log(myName);
// console.log(anothername);

let userOne = {
    email: "pulkit@xyz.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "py@xyz.com"

console.log(userOne.email);
console.log(userTwo.email);
// console.log(userTwo.upi);
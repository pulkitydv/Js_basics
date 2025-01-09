let score = "33abc"
let sc = null

// console.log(typeof score);
// console.log(typeof(sc)); //gives object

let valueInNumber = Number(score)
let s = Number(sc)
// console.log(typeof valueInNumber);
// console.log(typeof s);
// console.log(valueInNumber);
// console.log(s);

// "33" => 33
// "33abc" => NaN (Not a Number)
//null => 0
// true => 1 ; false => 0

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)

//  console.log(booleanisLoggedIn);

// 1 => true ; 0 => False 
// " " => false 
// "dfgb" => true

let someNumber = 33

let Stringno = String(someNumber)
// console.log(Stringno)
// console.log(typeof Stringno);

// ******* Operations ******* //

let value = 3
let negval = -value
// console.log(negval);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // works as 2 raise to power 2
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Pulkit"

let str3 = str1 + str2
//console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
//these above four are dont need to be understand deeply so much . to know this process of above four type conversion can go to tc39.es js website on type conversion topic .

// console.log(+true);
// console.log(+"");

let num1 , num2 , num3

num1 = num2 = num3 = 2 + 2
//not a good practice to assign value like this . it affects readabiltiy , readability should be on priority

let gamecounter = 100
gamecounter++ 
// console.log(gamecounter);


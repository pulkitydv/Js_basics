const accountId = 14432
let accountEmail = "pulkit@google.com"
var accountPass = "12342"
accountCity = "Jaipur"
//This above method is also used to declare a Variable by not using either let or var . But it is a Bad Practice so prefer to use let to declare a variable .
let accountState

// accountId = 2  // not allowed because it is declared as constant above and can't be change again 
accountEmail = "hc@hc.com"
accountPass = "21321"
accountCity = "Delhi"

/*
Prefer not to use var to declare a variable 
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([ accountEmail , accountId , accountPass , accountCity , accountState ])
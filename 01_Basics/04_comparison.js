// console.log(2 > 3);
// console.log(2 < 3);
// console.log(2 >= 3);
// console.log(2 <= 3);
// console.log(2 == 3);
// console.log(2 != 3);

// console.log("2" > 1);
// console.log("02" > 1);

let str1 = "Pulkit"
let str2 = "Yadav"
// console.log(str1 != str2);

// When we compare two values , we have to keep in mind that both should be of same datatype

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

//The reason is that an equality check == and comparisons < > <= >= work differently in javascript.Comparisons convert null to a number , and treat it as 0.
//So , that's why (3) null >= 0 gives true whereas (2)&(1) null == 0 ,null>0 gives false . 

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// These types(above) of conversions should be avoid because it creates confusion , so have to strictly avoid.

// === ( strict check )
// it compare values and it also check that both are of same datatype or not 
// console.log("2" === 1);   // gives false

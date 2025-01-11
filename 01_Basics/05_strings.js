const name = "Pulkit"
const count = 50

// console.log(name + count + " Yadav");  this is a outdated syntax 

console.log(`Hello my name is ${name} and count is ${count}`);
//**** this is a modern syntax . better and readable . It is known as String Interpolation ****

//Another best way to declare a string
const game = new String('Forza-best')
// console.log(game);
//by using this we basically choose objects of javascript  by using new keyword . (previous method also choose obejcts behind the scene)
// console.log(typeof game); //gives object

// console.log(game[0]); 
// console.log(game[1]);
// console.log(game[2]); 
//this above works like a key value pair . for ex 0 key is mapped with F , 1 is mapped with o and so on .

// console.log(game.length);
// console.log(game.toLowerCase());  
// console.log(game.charAt(3));  

const newgame = game.substring(0,3)
console.log(newgame); 

const anothergame = game.slice(2,-5)
console.log(anothergame);

const anothernewgame = "   Pulkit "
console.log(anothernewgame.trim());

const url = "https://pulkit.com%20yadav"
console.log(url.replace('%20' , '-'));

console.log(url.includes('pulkit'))

console.log(game.split('-'));

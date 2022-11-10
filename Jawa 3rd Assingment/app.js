
var a = ["a","b","c","d","e"]
// a.push("z")
// console.log(a);
// a.pop()
// console.log(a);

// a.shift()
// console.log(a);

// a.unshift()
// console.log(a);
// var b = a.slice("3")
// console.log(b);
// var b =a.splice(0,2)
// console.log(b);
// a.splice(2,1,"o","p"); 
// console.log(a);

// for (var i = 0; i <10; i++) {
//     console.log("abc");
// alert("hamza");
// // }
// for (var i = 0; i <10; i++) {
//     console.log("abc");
// program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}
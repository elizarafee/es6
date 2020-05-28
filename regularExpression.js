// Regular expression is used in case of Searching and Replacing inside string

// long syntex
/*
let reg1 = new RegExp('pattern', 'flags');
*/
// short syntex
/*
let reg2 = /pattern/flags;
let reg3 = /pattern/;           // without flags
*/

let x = 'i am Eliza Ahmed Rafee';
let reg1 = /Eliza/;
console.log(x.search(reg1));

// but the searching procedure is case sensitive so we have to use the flag to overcome it
/*
let x = 'i am Eliza Ahmed Rafee';
let reg1 = /eliza/;             // here i have used small 'e' instead of capital 'E'
console.log(x.search(reg1));    // beacause of the case sensitivity the output will be -1
*/

let y = 'i am Eliza Ahmed Rafee';
let reg2 = /eliza/i;            // here i have used the flag i
console.log(x.search(reg2));    // so now the output will be of our desired one

// there are total of 5 types of flag like : i, g, m, u, p


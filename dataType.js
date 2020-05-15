// In js there are 2 types of data types. 1 - primitive type | 2 - object type

// PRIMITIVE TYPE:
// primitive - types are immutable(unchangeable)

let a = 24;
a = 34;         // the value of a is not changing there a new variable is creating a with value of 34

// Infinity and NaN are mmutable coz these are not specifically given
const INF = Infinity;
const B = NaN;

// String
let text = 'this is a string';

// Boolean 
let c = true, d = false;

// symbols
// Symbol is a new data type in ES6. Which represents a unique token everytimeonce a token is generated it'll not match any other token
const RED = Symbol();
const WHITE = Symbol("White color");
const GREEN = Symbol();
if(RED==GREEN){
    console.log(true);
}else{
    console.log("Symbol token didn't match!");
}

// null & undefined
// these are almost same but it's better to use NULL instead of UNDEFINED because UNDEFINED is taken in default whenever a var is generated but the value is not given
let x, y = null, z = undefined; // x is already taken as undefined
console.log(x, y, z);



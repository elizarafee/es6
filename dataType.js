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



// OBJECT TYPE:
// Objects are mutable and take a value at a time. objects are like container which may contain different types of data.
// there are 5 types of object type: 1 - array, 2 - date, 3 - regular expression, 4 - map and weakmap, 5 - set abd weakset.
// Object literal syntax -> {}

// OBJECT
const OBJ = {};
OBJ.age = 24;
OBJ.name = 'Eliza';
console.log(OBJ);

const OBJE = {
    name : 'HASAN TAREQUE',
    sub : 'Computer science engineering'
};

console.log(OBJE);
// Deleting attribute from an object
delete OBJE.sub;
// Adding attribute to an object
OBJE.uni = 'Shahjalal University';
console.log(OBJE);


// 1 - ARRAY:
const A1 = [1, 10.7, true, 'ret'];
// Array can contain arrays
const A2 = [[1,2,3],[4,5,6]];
// changing value
A2[1] = 'mouse';
console.log(A1);
console.log(A2);


// 2 - DATE:
// Date represents date and time
// recent time
const NOW = new Date();
console.log(NOW);
const RENDOM = new Date(2003, 4, 19);
console.log(RENDOM);
const RENDOM2 = new Date(2003, 4, 19, 15, 0);
console.log(RENDOM2);


// 3 - REGULAR EXPRESSION:
// is sub language of JS. Used to perform complex search and replace operations on strings.




// 4 - MAPS & WEAKMAPS:
// Maps are just like objects but is offers more advantages than object in certain situations.

// Map assings ROLE to user.
const ROLE = new Map();
// ROLE.set(t1, 'user1');
// ROLE.set(t2, 'user2');



// 5 - SETS:
// Sets are similar to array except they can't contain duplicate element

// Set specify ROLE2 to user
const ROLE2 = new Set();
ROLE2.add('set user1');
ROLE2.add('set user2');
console.log(ROLE2);
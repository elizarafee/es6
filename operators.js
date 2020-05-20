// Arithmetic operator : +, -, *, /, ++, --
// Comparison operator : Strict equality (===, !==), obstract equality (== , !=), relational
// == checks the equaity of value, === checks the equality of datatype
// Logical operator : &&, ||, !
// Bitwise operator : &, |,^ ,~ ,<< , >>, >>> 
// Assignment operator : additional(+=), subsractional)(-=).....(*=)(/=), left shift(<<=), right shift(>>=), right shift zero fill(>>>>=), and(&=), or(|=), xor(^=)
// Comma operator : ,
// Destructing assignment operator : takes invidual values from any array or objects and assign them in other variables 


let a = 10, b = 10, c = 'eliza', d = 'tareque';
if(a==b){
    console.log('value is the same');
}else{
    console.log('value is not the same');
}
if(a===c){
    console.log('datatype is the same');
}else{
    console.log('datatype is not the same')
}

// Destructing operator
const OBJ = {
    s : 3, 
    r : 3, 
    t : 5, 
    u : 6
};

var {s, r, t, x} = OBJ;
console.log(s, x, d);

const ARR = [3, 4, 5, 6];
var [o, p, q] = ARR;
console.log(o);


const ARR2 = [3, 4, 5, 6, 7 ,8, 9, 10, 11];
var [y, u, i,...rest] = ARR;
console.log(rest);

// Destructing data from OBJ object
function getData({s, r, t, u}){
    return `${s}${r}${t}${u}`;          // backtick
}
console.log(getData(OBJ));


// instanceof operator : checking instance
const aa = new Date();
console.log(aa instanceof Date);
const arr = [1, 2, 3, 4];
console.log(arr instanceof Array);

// delete operator
delete OBJ.u;
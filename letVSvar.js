

console.log(x);
var x = 4;      // UNDEFINED

// JS scan the entire code but js doesn't assign a value to that value. This is called HOISTING
// it was a problem in ES5 so in ES6 LET is used generally

// LET vs VAR
for(var i=0, j=3; i<=3; i++, j--){
    console.log('i = '+ i + 'j = '+ j);
}
console.log(i, j);

for (let t = 0; t<3; t++){
    console.log(t);
}
// console.log(t);      // 't' wont be available outside the loop


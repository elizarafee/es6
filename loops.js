// In ES6 there are 5 types of loop: FOR, WHILE, DO-WHILE, FOR-IN, FOR-OF

var j = 0
//  While loop
while(j<10){
    console.log('While loop no : ', + j);
    j++;
}

var c = 1;
do{
    console.log('For while loop no : ' + c);
}while(c>5);

var i;
// For loop
for(i = 10; i > 0 ; i--){
    console.log('For loop no : ' + i);
}
// Multiple variable
for(let i = 0, j = 5; i<5; i++, j--){
    console.log(i, j);
}


// FOR..IN loop
const OBJ = {
    a : 'ELIZA',
    b : 'Tareque',
    c : 'Hasan',
    d : 'Rafee'
};

for(let o in OBJ){
    console.log(OBJ[o]);
}

// FOR..OF loop
let str = 'abcdefghijklmnopqrstuv';

for(let o of str){
    console.log(o);
}


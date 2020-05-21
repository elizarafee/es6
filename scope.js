// Lexical scope: (sometimes known as static scoping ) is a convention used with many programming languages that sets the scope (range of functionality) of a variable so that it may only be called (referenced) from within the block of code in which it is defined.


let a = 10;
function fun(){
    console.log(a, b);
}
let b = 20;
fun();

// Global scoping
let xx = 'Eliza';
const A = {
    c : 'Hasan',
    d : 'Tareque'
};

function f(){
    console.log(`${A.c} ${A.d}  ${xx}` );
}

f();

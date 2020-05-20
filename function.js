// NORMAL Function

function fun1(){
    console.log("Hi! I'm a statement inside a function.");
}
fun1();

// Assigning a function inside a variable
// 1:
const OBJ1 = function(a = 10){      // here the 10 is given in default
    return a+a;
}
console.log(OBJ1(3));

// 2: assigning a created function OBJ1 as a object's variable
const OBJ2 = {
    a : 'Tareque',
    b : OBJ1
};
console.log(OBJ2.b(1));

// 3: Anonymous function : newFun()
const OBJ3 = {
    a : 'Tareque',
    newfun(){
        return "Hi! I'm a function inside a object."
    }
}
console.log(OBJ3.newfun());


// Closure is simply a function into another function by which we can call the variable of a function from outside of the function
// ex : 1
function Counter(){
    let count = 0;

    return function(){
        return count++;
    };
}
let counter = Counter();
console.log(counter());
console.log(counter());
console.log(counter());



// ex : 2
{
    let OBJ= {
        a : 'Tareque',
        b : 'Hasan'
    };
    f = () => {return OBJ}
   
}

console.log(f());

t = f();
console.log(t.a);
console.log(t.b);
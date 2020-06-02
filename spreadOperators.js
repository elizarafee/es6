// The spread operator allows us to spread the value of an array (or any iterable) across zero or more arguments in a function or elements in an array 
let fun1 = function(msg,...colors){
    console.log(msg);

    for(let i in colors){
        console.log(colors[i]);
    }
}

let msg = 'list : ';
let clrArray = ['indigo', 'orage', 'purple'];
fun1(msg, ...clrArray);             // the arrays elements will be spreaded
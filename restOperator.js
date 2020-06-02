// The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array.
// ...rest(any name can be placed on the place of rest)
let fun1 = function(msg, y, ...colors){
    console.log(msg);
    console.log(y);
    for(let i in colors){
        console.log(colors[i]);
    }
}
let msg = 'list : ';
let y = 'colors : ';
fun1(msg, y, 'red', 'green');
fun1(msg, y, 'red', 'green', 'blue');
fun1(msg, y, 'red', 'green', 'blue', 'green');
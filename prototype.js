// ES6 prototype methods can be inherited by children classes to simulate an object oriented behaviour in JavaScript but under the hood, the inheritance feature is simply a function of the existing prototype chain and we'd look into this very soon.
// Every function has a special prototype property

let f = function(){
    this.a = 1;
    this.b = 2;
    this.c = 3;
}

// create instance of the function f uding new keyword
let g = new f();
g.a = 'changed by intance';
g.d = 'new data is added';

console.log('adding and changing by instance is successful');
console.log(g.a);
console.log(g.b);
console.log(g.c);
console.log(g.d);

// changing the values to number
g.a = 1;
g.d = 4;


// create prototype prorperty
f.prototype.b = 'changed by prototype';     // changing not happens by prototype
f.prototype.e = 'added by prototype';       


console.log("adding is successful but changing can't be happened by prototype");
console.log(g.a);
console.log(g.b);
console.log(g.c);
console.log(g.d);
console.log(g.e);

console.log(f);
// showing the prototype methods
console.log(f.prototype);
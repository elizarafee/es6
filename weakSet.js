// WeakSet() and WeakMap() is similar except the declaring method 
// in case of weakSet() the keys have to be object
// weakSet can't be iterated or cleared 
// keys in weakSet can be garbage collected
// garbage collection in js oerforms automatically & it's invisible to us
// the garbage collection take care of memory management in JS
// weakSet()'s property is PRIVATE

// constructor of WeakSet()
const WS = new WeakSet();


let obj1 = {};
let obj2 = {};

WS.add(obj1);
WS.add(obj2);
console.log(WS.has(obj1));
WS.delete(obj1);
console.log(WS.has(obj1));
console.log(WS);


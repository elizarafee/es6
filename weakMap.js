// garbage collection

let user = {
    name : "Eliza Rafee"
};

console.log(user.name);
user = null;
//console.log(user.name);      // now JS will put junk data to name

// in case of weakMap() the keys have to be object
// weakmap can't be iterated or cleared 
// keys in weakmap can be garbage collected
// garbage collection in js oerforms automatically & it's invisible to us
// the garbage collection take care of memory management in JS
// weakMap()'s property is PRIVATE

// weakMap():
let weakmap = new WeakMap();

let obj1 = {};
let obj2 = {};
// set() is for setting data and get is for getting those data
weakmap.set(obj1, 'first data');
weakmap.set(obj2, 'second data');
console.log(weakmap.get(obj1));
console.log(weakmap.get(obj2));

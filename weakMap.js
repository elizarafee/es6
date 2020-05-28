// garbage collection

let user = {
    name : "Eliza Rafee"
};

console.log(user.name);
user = null;
console.log(user.name);      // now JS will put junk data to name

// in case of weakMap() the keys have to be object
// weakmap can't be iterated or cleared 
// keys in weakmap can be garbage collected
// garbage collection in js oerforms automatically & it's invisible to us
// the garbage collection take care of memory management in JS
// weakMap()'s property is PRIVATE

// weakMap():
let weakmap = new WeakMap();

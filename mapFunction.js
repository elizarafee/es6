// Using map function you can manipulate each element in the object. Map() function transform the element in the array. 
// map() doesn't modify array it creates a new one.


// example : 1
const ARR = [1, 2, 3, 4, 5, 6, 7];
const map1 = ARR.map(x => x*2);
console.log(map1);

// example : 2
const CART = [
    {product : 'Laptop', price : 55},
    {product : 'Mobile', price : 14}
];

const PRODUCT = CART.map(x => x.product);
const PRICE = CART.map(x => x.price);
console.log(`Products are : ${PRODUCT},
Prices are : ${PRICE}`);

// example : 3
// making constructor of map
const MYMAP = new Map();

let a = 'HELLO',
    b = {},
    c = function(){};


// use set() method to set key, value
MYMAP.set(a, 'value A');
MYMAP.set(b, 'value B');
MYMAP.set(c, 'value C');
// adding new
let d;
MYMAP.set(d, 'new value D');

// using get() method for getting the setted key value pairs and print them(MYMAP)
console.log(MYMAP.get(a));
console.log(MYMAP.get(b));
console.log(MYMAP.get(c));
console.log(MYMAP.get(d));


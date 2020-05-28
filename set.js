// set() object is identical to map object but set object allows you to store unique values of any type. Where duplicates are not allowed

// creating constructor of set()
const SET = new Set();

// Add element in the set object using add() method;
SET.add(1);
SET.add({a : 'Hasan'});
SET.add(function(){return 12;});
SET.add([1, 3, 5.7]);
console.log(SET);

// another way of adding data
// const SET1 = new Set(2, function(){return 56;}, [3, 5.6]);

const SETT = new Set([2, function(){return 56;}, {a : 'Eliza'}, [3, 5.6]]);
console.log(SETT);

// checking presence of data
console.log(SETT.has(2));       // true

// deleting data
SETT.delete(2);
console.log(SETT.has(2));   	// false

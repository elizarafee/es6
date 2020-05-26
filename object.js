// Objects are mutable and take a value at a time. objects are like container which may contain different types of data.
// there are 5 types of object type: 1 - array, 2 - date, 3 - regular expression, 4 - map and weakmap, 5 - set abd weakset.
// Object literal syntax -> {}

// OBJECT
const OBJ = {
    name : 'HASAN TAREQUE',
    sub : 'Computer science engineering'
};

// Deleting attribute from an object
delete OBJ.sub;

// Adding attribute to an object
OBJ.uni = 'Shahjalal University';

// creating object reference
ref = OBJ;
ref.a = 'Property is created by a reference of the object.';

console.log(OBJ.a, OBJ.uni);
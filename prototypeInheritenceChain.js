// prototypeInheritence.js : check the commit 'Prototype inheritence'.. 
// making chain of prototype inheritence using multiple object

let bride = {
    brideName : 'Eliza'
};

let groom = {
    groomName : 'Tareque'
};

groom.__proto__ = bride;
console.log(groom.groomName);
console.log(groom.brideName);


let marriage = {
    type : 'Arranged'
};


marriage.__proto__ = groom;
// now the property from bride clas will be accessible by marriage class
console.log(`Groom : ${marriage.groomName}, Bride : ${marriage.brideName}, Marriage Type : ${marriage.type}`);

// Calll method is a technicque by which we can call 

function magic(){
    return `Welcome to ${this.name}`;
}

const OBJ1 = {
    name : "Hasan"
};


const OBJ2 = {
    name : "Tareque"
};

console.log(magic.call(OBJ1));
console.log(magic.call(OBJ2));
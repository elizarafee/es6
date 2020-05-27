// The prototype is a little bit “magical”. When we want to read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, such thing is called “prototypal inheritance”. Many cool language features and programming techniques are based on it.

// The property [[Prototype]] is internal and hidden, but there are many ways to set it. One of them is to use the special name __proto__, like this:

let student = {
    name : 'Tareque',
    uni : 'Shahjalal Univeristy',
    show(){
        console.log(`name : ${this.name}, uni : ${this.uni}`);
    }
};

let school = {
    schoolname : 'MC Academy',
    showup(){
        console.log(`name : ${this.name}, school : ${this.schoolname}, uni : ${this.uni}`);
    }
};

school.__proto__ = student;
console.log(school.name);
school.show();
school.showup();
console.log(school);
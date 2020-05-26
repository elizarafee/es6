// class
class Model {
    constructor(name, no){
        this.no = no;
        this.name = name;
    }

    show(){
        console.log(`name : ${this.name},
no : ${this.no}`);
    }
}

// creating object of the class
const OBJ1 = new Model('Hasan', 100);
const OBJ2 = new Model('Eliza', 122);

OBJ1.show();
OBJ2.show();
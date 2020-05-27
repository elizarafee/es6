// super() method is used to call the constructor of the parent class


class Students {
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    showup(){
        console.log(`Name : ${this.name}, ID : ${this.id}`);
    }
}


class School extends Students {
    constructor(){
        // perameters are inputed in the parent class's constructor
        super('Eliza', 122);
    }
}


const obj1 = new School();
obj1.showup();
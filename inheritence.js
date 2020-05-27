// Inheritence gives the opportunity to the child class to reuse the parent class
// keyword : extends


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
    constructor(result){
        super('Eliza', 122);
        this.result = result;
        console.log(this.name, this.id, this.result);
    }
}

const obj1 = new School(3.66);
obj1.showup();
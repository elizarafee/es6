// calling same method in different js object is called polymoprphism
// polymorphism is overriding any property or method

class student {
    constructor(name, result){
        this.name = name;
        this.result = result;
    }
    about(){
        console.log(this.name , this.result);
    }
}

class school extends student {
    constructor (id){
        super('Eliza', 3.66);
        this.id = id;
    }
}

const OBJ1 = new school();
OBJ1.about();

class information extends student{
    constructor (id){
        super('Eliza', 3.66);
        this.id = id;
    }

    // here the about function of student class is being overriding and the techniqu is called polymorphism
    about(){
        console.log(this.name , this.result, this.id);
    }
}


const OBJ2 = new information(122);
OBJ2.about();
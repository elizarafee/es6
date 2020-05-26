
// a static method can't be called by an instance of the class or an non static method

// ex : 1
class StaticClass1 {
    

    static onCall(){
        return 'this is the 1st static method statement';
    }

}

const ins1 = new StaticClass1();
/*
ins1.onCall();
it will get an error coz onCall is a static function
*/
// so it can be called by it's own class name StaticClass1:
console.log(StaticClass1.onCall());

// but static method can be called by its constructor of the class
class StaticClass2 {
    constructor(){
        console.log(this.constructor.onCall());
    }

    static onCall(){
        return 'this is the 2nd static method statement';
    }
}

const ins2 = new StaticClass2();
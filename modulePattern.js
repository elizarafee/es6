// The Module Pattern is one of the important patterns in JavaScript. It is a commonly used Design Pattern which is used to wrap a set of variables and functions together in a single scope. It is used to define objects and specify the variables and the functions that can be accessed from outside the scope of the function.
// the secret of the modulen pattern is thatb it returns an object containing all of the functions that we want to be public


// module no : 1
var budgetController = (function(){
    var a = 20;
    var add = function(b){
        c = a+b;
        console.log(c);
    }
    return {
        publicTest : function(d){
            return add(d);
        }
    }
})();
budgetController.publicTest(10);

// module no : 2
var uiController = (function(){
    var a = 30;
    var sub = function(b){
        c = a-b;
        console.log(c);
    }
    return{
        pubTest : function(d){
            return sub(d);
        }
    }
})();
uiController.pubTest(10);

// module no : 3
var uiController = (function(c, d){
    var a = budgetController.publicTest(c);
    var b = uiController.pubTest(d);
    return (a, b);
})(10, 10);
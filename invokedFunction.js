/* (function(){
     console.log('hi');
    })();
*/

let fun = (function(){
 let count = 0;
 return function(){
    return count++;
 }
})();

console.log(fun());
console.log(fun());
console.log(fun());
console.log(fun());
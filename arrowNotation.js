// Arrow notation : writing function shortly

/*
1: without perameter
const a1 = function(){
    return 'Hello!';
}
*/
const a1 = () => 'Hello!';
console.log(a1());

/*
2: one perameter
const a2 = function(arg1){
    return arg1*arg1;
}
*/
const a2 = arg1 => `${arg1}`*`${arg1}`;
console.log(a2(3));


/*
3: multiple perameter
const a3 = function(arg1, arg2, arg3){
    return arg1*arg1*arg3;
}
*/
const a3 = (arg1, arg2, arg3) => `${arg1}`*`${arg2}`*`${arg3}`;
console.log(a3(2,3,3));


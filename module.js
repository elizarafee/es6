/*
export function fun(){
    
}
*/

/*
for default :
export default function my(a){
    // some code
}
in this case you can call this function as any name you want from the html file
*/

function myfun1(a){
    return a*3;
}

function myfun2(a){
    return a+33;
}

export{ myfun1, myfun2 as x};
// export{ * }; (for all)
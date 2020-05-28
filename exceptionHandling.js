// exception handling is used to write error free programming
// this mechanism which cares about to deal error in control
// this is : try{}catch(){}

// ex : 1
try{
    let ;
}catch(e){
    console.log(`Error is : ${e}`);
}

// ex : 2
try{
    console.log(sdhsd) ;
}catch(err){
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
}finally{
    console.log('Finally executed');
}


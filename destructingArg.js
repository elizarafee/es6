const OBJ = {
    s : 3, 
    r : 3, 
    t : 5, 
    u : 6
};


// Destructing data from OBJ object
function getData({s, r, t, u}){
    return `${s}${r}${t}${u}`;          // backtick
}
console.log(getData(OBJ));
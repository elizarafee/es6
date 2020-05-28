// garbage collection

let user = {
    name : "Eliza Rafee"
};

console.log(user.name);
user = null;
console.log(user.name);      // now JS will put junk data to name
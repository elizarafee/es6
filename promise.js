// // ex : 1
let p = new Promise((resolve, reject) => {
    let a = 1+1;
    if(a == 2){
        resolve('success!');
    }else{
        reject('failed');
    }
})

p.then((message)=> {
    console.log('this is from then so its resolve and the output get '+ message);
}).catch((message)=>{
    console.log('this is from catch so its reject and the output is '+message);
})

// ex: 2
const bride = 'Eliza';
const groom = 'Tareque';
const marriage = false;

let pro = new Promise((resolve, reject) => {
    if(bride == 'Eliza' && groom == 'Tareque'){
        let g = 'bride is Eliza and groom is tareque';
        if(marriage){
                g += ' & finally couple match and marriage is completed';
                resolve(g);
        }else{
            reject('couple did match but marriage is not completed');
        }
    }else{
        reject('couple didnt match so Marriage is not completed!');
    }
})

pro.then((message)=> {
    console.log('resolve: '+ message);
}).catch((message)=>{
    console.log('reject: '+ message);
})

// EX: 3: Multiple promises

const r = new Promise((resolve, reject)=> {
    let p = 1
    if(p == 1){
        resolve('resolve : 1');
    }else{
        reject('reject : 1');
    }  
})

const t = new Promise((resolve, reject)=> {
    let p = 1
    if(p == 1){
        resolve('resolve : 1');
    }else{
        reject('reject : 1');
    }  
})

const y = new Promise((resolve, reject)=> {
    let p = 1
    if(p == 1){
        resolve('resolve : 1');
    }else{
        reject('reject : 1');
    }  
})

Promise.all([r, t, y]).then((message)=> {
    console.log(message);
}).catch((message)=>{
    console.log(message);
})
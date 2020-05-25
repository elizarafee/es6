// array

// type 1:
 const ARR1 = [1, 2, 3];
 console.log(ARR1[1]);


 // type 2:
 const ARR2 = [1, 'Tareque', null, 2.4];
 console.log(ARR2[2]);


 // type 3:
 const ARR3 = [[2, 'her', 3.5], [3, 5, 7]];
 console.log(ARR3[1]);
 console.log(ARR3[0][1]);

 // type 4:
 const ARR4 = [
     {
         name : 'Hasan',
         no : 20
     },
     2, 3, 5, 'Tareque'
 ]
 console.log(ARR4[0]);
 console.log(ARR4[0].name);

 // type 5:
 const ARR5 = [
     [2,3,4],
     function(){
         return 'Hello Jamai';
     }
 ]
 console.log(ARR5[1]);
 console.log(ARR5[1]());

 // Inserting and deleting from the end: push(x), pop()
 const ARR = [2, 4, 5, 6, 7, 8];
 ARR.push(10, 11);
 ARR.pop();
 console.log(ARR);

 
 // Inserting and deleting at the start: unshift(x), shift()
 const ARRA = [2, 4, 5, 6, 7, 8];
 ARRA.unshift(10, 11);
 ARRA.shift();
 console.log(ARRA);


 // Concat() method
 // it only concatinates the detas not changes the original array
 console.log('Concat() method');
 const ARRA1 = [2, 3, 4, 5, 6, 7];
 console.log(ARRA1.concat(8, 9, 10));
 console.log(ARRA1);

// slice() method
// shows from a particular index to a particular index
console.log('Slice() method');
console.log(ARRA1.slice(3));
console.log(ARRA1.slice(1,5));

// splice() method
/*
splice(w, x, y, z, ..., q)
w = starting index
x = how many data want to remove
y, z, ...., q = adding values sequencially
*/
console.log('Splice() method');

// it'll delete 2 datas from ist index.
console.log(ARRA1.splice(1,2));
console.log(ARRA1);

//  it'll add 10 and 11 from 1st index
const ARRA2 = [2, 3, 4, 5, 6, 7];
console.log(ARRA2.splice(1,0,10,11));
console.log(ARRA2);

//  it'll  delete 2 datas from 1st index and add 10 and 11 on those position
const ARRA3 = [2, 3, 4, 5, 6, 7];
console.log(ARRA3.splice(1,2,10,11, 45));
console.log(ARRA3);


// copyithin() method : copying array element
const ARRA4 = [1, 2 ,3 ,4 ,5 ,6];
// starting index is the 1st perameter and 2nd perameter is where you want to copying index from
ARRA4.copyWithin(1,3);      // 1,4,5,6,5,6 (5,6 repeated to cover the space of the original array)
console.log(ARRA4);

// More have to know about copywithin() mmethod


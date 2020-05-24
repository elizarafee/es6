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
 const ARRA1 = [2, 3, 4, 5, 6, 7];
 console.log(ARRA1.concat(8, 9, 10));
 console.log(ARRA1);


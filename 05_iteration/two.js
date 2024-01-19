// " while " loop::>

let idx = 0;
while(idx<=10){
    console.log(`Value of index is ${idx}`);
    idx+=2;
}

let myarr = ['flash', 'batman', 'superman'];
let arr=0;
while(arr<myarr.length){
    console.log(`Value is ${myarr[arr]}`);
    arr++;
}


// " do while loop " ::>

/* Syntax ::>   do{
                   // Statement
                }while(condition)
 */

let score = 1;
do{
    console.log(`Score is ${score}`);
    score+=1;
}while(score<=10)
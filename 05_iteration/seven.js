const mynum = [1,2,3,4,5,6,7,8,9,10];

const newnum = mynum.map((item)=>{
    return item+10;
})
console.log(newnum);    /*  [
                                11, 12, 13, 14, 15,
                                16, 17, 18, 19, 20
                            ]
                        */

const ny = [];
mynum.forEach((item)=>{
    ny.push(item+10);
})
console.log(ny);

const n1 = mynum.map((num)=>num*10).map((num=>num+1));
console.log(n1);  /* return [
                                11, 21, 31, 41,  51,
                                61, 71, 81, 91, 101
                            ] */
 // Here Operation Do from left to right

const n2 = mynum.map((num)=>num*10).map((num=>num+1)).filter((num)=>num>60);
console.log(n2);    // Return  [ 61, 71, 81, 91, 101 ]
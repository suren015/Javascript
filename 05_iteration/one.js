// " for " loop ::>
/*
Syntax::            for (let index = 0; index < array.length; index++) {
                        const element = array[index];
                    }
*/

for(let idx=0;idx<10;idx++){
    console.log(idx);
}

for(let i=0;i<=10;i++){
    console.log(`Outer loop value ${i}`);
    for(let j=0;j<=10;j++){
        console.log(`Inner loop value ${j} and Outer loop value${i}`);
    }
}

let myArray = ["flash", "batman", 'Superman'];
for(let idx=0;idx<myArray.length;idx++){
    const ele = myArray[idx];
    console.log(ele);
}


// " Break and Continue " ::>

// Break->
for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
}

//Continue->
for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`Detected ${i}`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}
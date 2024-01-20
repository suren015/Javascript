const coding = ["js", "cpp", "java", "python", "ruby"];

// Syntax for..each loop ::> name.forEach(function(variable){});
// Other Syntax ::>name.forEach(ele=>{})
coding.forEach(function(val){
    console.log(val);
})


coding.forEach(element => {
    console.log(element);
});


// Arrow function ::> name.forEach((variable pass)=>{})
coding.forEach((item)=>{
    console.log(item);
})


//Using a Function::>

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)


coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);      // Return arr[i], i, whole array each time
})



// Object inside an Array::>
const myCoding = [
    {
       languageName: "javascript",
       languageFileName: "js" 
    },
    {
       languageName: "CPP",
       languageFileName: "C++" 
    },
    {
       languageName: "Python",
       languageFileName: "py" 
    }
]

myCoding.forEach((item)=>{
    console.log(item);      // Return each object
    console.log(item.languageName);
})
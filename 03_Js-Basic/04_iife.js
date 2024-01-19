// Immediately Invojed Function Expression (IIFE) ::

// Syntax :: " ()(); " ::> First Parenthesis is for function Definition and the second parenthesis is for executing the function
  
  /* Most Imp:: IIFE ko end krne ke liye semicolon ka use krna h */

// Global scope ke pollution se problem hoti h kyi baar, to uss global scope ke variables or declaration ke pollution ko htaane k liye hum IIFE ka use krte h

//Named IIFE::
(function chai(){
    console.log("DB Connected-0");
})();

//Unnamed IIFE
(()=>{
    console.log("DB Connected-1");
})();


//Parameter IIFE
((name)=>{
    console.log(name);
})("Suren");                        // iss parenthesis me pass krni h values
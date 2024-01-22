// Taking all Button
const buttons = document.querySelectorAll('.button');
// console.log(buttons);


// Selecting the body
const body = document.querySelector('body');

buttons.forEach((button)=>{
    // console.log(button);

    // Event Listener on each buttons
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
    });
})
// Selecting div of clock id
const clock = document.querySelector('#clock');

// for running time after each second, the function be::>
setInterval(()=>{
    let date = new Date();
    // Change the inner HTML of clock to show this tme
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
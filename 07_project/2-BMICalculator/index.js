// Selecting the form so that we can calculate BMI by clicking on Calcuate Button

const form = document.querySelector('form');


// For calculating BMI ::>
form.addEventListener('submit',function(e){
    e.preventDefault();

    // Selecting the value of height and weight
    const h = parseInt(document.querySelector('#height').value);  // By converting them into int from string
    const w = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');


    if(h==='' || h<0 || isNaN(h)){
        results.innerHTML = 'Please give a valid height'
    }else if(w==='' || w<0 || isNaN(w)){
        results.innerHTML = 'Please give a valid weight'
    }else{
        const bmi = (w/((h*h)/10000)).toFixed(2);

        // Show the result
        results.innerHTML = `<span>${bmi}</span>`

        const p = document.createElement('p');


        if(bmi < 18.6){
            p.textContent = "Under Weight";
        }else if(bmi>=18.6 && bmi<=24.9){
            p.textContent = "Normal Range";
        }else{
            p.textContent = "Over-Weight";
        }
        results.appendChild(p);
    }

});
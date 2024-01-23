// Random Number Generator between 1 to 100
let randomNumber = parseInt(Math.random()*100+1);

// Selecting submit Button
const submit = document.querySelector('#subt');

// Selecting User Input
const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


// Creat an element of paragraph type
const p = document.createElement('p');

let prevGuess = []  // This is an array because we store the values that user submit and display them

let numGuess = 1;

let playGame = true;



// You r available for playing a game or not
if(playGame){
    submit.addEventListener('click', (e)=>{
        // This is a form so we have to stop the values else these values goes to the server, so use preventDefault()
        e.preventDefault();

        const guess = parseInt(userInput.value);

        // Check Validation::
        validateGuess(guess);
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess<1){
        alert('Please enter a number more than 1')
    }else if(guess>100){
        alert('Please enter a number less than 100');
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guesses it right`);
        endGame();
    }else if(guess<randomNumber){
        displayMessage(`Number is too low`);
    }else{
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess){
    // Clean up the value for next user value
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    // Clear all Values
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e)=>{
        randomNumber = parseInt(Math.random()*100 +1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}



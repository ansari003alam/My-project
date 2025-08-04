let randomNumber = (parseInt(Math.random() * 100 + 1));
const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');
const p = document.createElement('p')

let preGuess = [];
let numGuess = 1;

let begin = true;

if(begin){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        
        validGuess(guess);
    })
} 

function validGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess < 1){
        alert('Please enter a number more than 1');
    }
    else if(guess > 100){
        alert('Please enter a number less than 100');
    }
    else{
        preGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over . Random Number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations! You got it right!`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Your guess is too low!`);
    }
    else if(guess > randomNumber){
        displayMessage(`Your guess is too high!`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${12 - numGuess} `;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">New Game</h2>`;
    startOver.appendChild(p);
    begin = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        e.preventDefault();
        randomNumber = (parseInt(Math.random() * 100 + 1));
        preGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${12 - numGuess} `;
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        begin = true;
    })
}


 
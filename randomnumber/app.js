/*
GAME FUNCTION:
- Player must guess a number between min and max
- Player gets a certain number of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if lose
- Let play choose to play again
*/

// Game Values
let min = 1;
    max = 1000,
    // winningNum = Math.floor(Math.random() * 10),
    winningNum = getRandomNum(min, max),
    guessesLeft = 5;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message'),
      totalguess = document.querySelector('.total-guess');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;
totalguess.textContent = guessesLeft;

// Play again event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  //console.log(guess);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {

    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    // console.log(winningNum);
  } else {

  // Check if won
  if(guess === winningNum) {

    gameOver(true, `${winningNum} is correct, YOU WIN!`)

  } else {
    // Wrong number
    guessesLeft -=1;
    // guessesLeft = guessesLeft - 1;
    if(guessesLeft === 0 ) {

    // Game over lost
    gameOver(false, `${guess} is wrong, YOU LOSE! The correct number was ${winningNum}`)

      
  } else {
    //Game contiues - answer wrong

    // Change border
    guessInput.style.borderColor = 'red';
    // Tell user it is the wrong number.
    setMessage(`${guess} is wrong, ${guessesLeft} guesses left.` , 'red');


    // Clear inpout
    guessInput.value = '';

      }
    }
  }
});

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    // Disable input
    guessInput.disabled = true;
    // Change border
    guessInput.style.borderColor = color;
    //Set message color
    message.style.color = color;
    
    // Set message won
    setMessage(msg);

    // Play again
    guessBtn.value = 'Play Again?';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
  //console.log(Math.floor(Math.random()*(max-min+1)+min));
  //Math.floor(Math.random() * 10)
  return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}


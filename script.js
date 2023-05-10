'use strict';
// Some Variables and functions
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 5;

let highscore = 0;

document.querySelector('.score').textContent = score;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};
// event handler guess function
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);
    //   When guess is 0 ZERO
    if (!guess) {
        displayMessage('🚫 No Number');
    }
    //   when guess is right
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.guess').disabled = true;
        document.querySelector('.guess').style.cursor = 'not-allowed';
        document.querySelector('.number').textContent = secretNumber;
        score;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //   When guess is not right
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.guess').style.cursor = 'not-allowed';
        }
    }
});

// Reset game event handler
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 5;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('.highscore').textContent = 0;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').disabled = false;
    document.querySelector('.guess').style.cursor = 'text';
});
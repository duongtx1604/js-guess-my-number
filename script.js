'use strict';

//random number
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

// highscore
let highscore = 0;

// display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// display number
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// score
let score = Number(document.querySelector('.score').textContent);
const scoreUpdate = function () {
  score--;
  document.querySelector('.score').textContent = score;
  if (score <= 0) {
    displayMessage('🙄 Bạn đã thua!!');
    document.getElementById('check').style.visibility = 'hidden';
    displayNumber(number);
  }
};

// check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!!');
  }
  //   Correct
  else if (guess === number) {
    displayMessage('😍 Đúng rùii!!');
    displayNumber(number);
    document.getElementById('check').style.visibility = 'hidden';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //  update highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess <= 0 || guess > 20) {
    displayMessage('😒 Sai rùi số từ 1-20 cơ màa!!');
    scoreUpdate();
  } else {
    displayMessage(guess > number ? '😒 Số to quá' : '😒 Số nhỏ quá');
    scoreUpdate();
  }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(`Khoi tao lai number = ${number}`);
  score = 10;
  document.querySelector('.score').textContent = score;
  document.getElementById('guess').value = '';
  document.getElementById('check').style.visibility = 'visible';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  displayNumber('?');
});

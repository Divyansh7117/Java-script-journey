'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 23;
*/
let randomnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //no data entered
  if (!guess) {
    document.querySelector('.message').textContent = 'no number entered';
  }
  //correct number entered
  else if (guess === randomnumber) {
    document.querySelector('.message').textContent = 'correct number entered';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
  }
  //entered number is greater than secret number
  else if (guess > randomnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'guess a lower number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //entered number is less than secret number
  else if (guess < randomnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'guess a higher number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//making again button working
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

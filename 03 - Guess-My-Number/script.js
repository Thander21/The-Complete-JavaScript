'use strict';

let score = 20;
let number = randomNumber();
let verify;
let highscore = -1;

function focusInput() {
  document.querySelector('.guess').focus();
  document.querySelector('.guess').value = '';
}

function disableScreen() {
  document.querySelector('.guess').disabled = true;
  document.querySelector('body').style.backgroundColor = 'red';
}

function updateScreen() {
  score--;
  document.querySelector('.score').textContent = score;
}

function randomNumber() {
  let number = Math.trunc(Math.random() * 20) + 1;
  return number;
}

function displayMessage(classHtml, text) {
  document.querySelector(classHtml).textContent = text;
}

document.querySelector('.score').textContent = score;
focusInput();

//Inicio do Jogo Evento Botão Confirma
document.querySelector('.check').addEventListener('click', function () {
  verify = Number(document.querySelector('.guess').value);

  //verifica se o valor digitado é um numero valido
  if (!verify || verify < 1 || verify > 20) {
    displayMessage('.message', '❌ Somente de 1 a 20');
    focusInput();
  } else {
    //acertou o numero
    if (verify === number) {
      displayMessage('.message', 'Numero Coreto 🏆🏆🏆');
      // displayMessage('.number', verify);
      document.querySelector('.number').style.width = '30rem';
      disableScreen();
      document.querySelector('body').style.backgroundColor = '#60b437';

      // ajusta a Melhor pontuação
      if (highscore < score) {
        highscore = score;
        displayMessage('.highscore', highscore);
      }

      //errou o numero perde ponto e continua e verifica a pontuação
    } else if (score > 1) {
      focusInput();
      updateScreen();

      // da dica se numero maior ou meno
      displayMessage(
        '.message',
        verify > number ? `${verify} é maior` : `${verify} é menor`
      );

      //acaba o jogo
    } else {
      displayMessage('Game Over');
      updateScreen();
      disableScreen();
    }
  }
});

//Resta o jogo no Botão Outra Vez
document.querySelector('.again').addEventListener('click', function () {
  number = randomNumber();
  score = 20;
  displayMessage('.message', 'Comece a adivinhar...');
  displayMessage('.score', score);
  displayMessage('.number', '?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').disabled = false;
  focusInput();
});

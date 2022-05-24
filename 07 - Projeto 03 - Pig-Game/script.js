'use strict';

// selecionando os botoes no Html
const btnMewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const imgDiceNumber = document.querySelector('.dice');

//variaveis de pontos e player ativo
let playerScore = [0, 0, 0];
let currentScore = 0;
let activePlayer = 1;

//dar inicio ou resetar
startReset();
function startReset() {
  document.querySelector(`.player--1`).classList.add('player--active');
  btnHold.disabled = false;
  btnRollDice.disabled = false;
  playerScore = [0, 0, 0];
  currentScore = 0;
  imgDiceNumber.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner', 'name');
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#score--2').textContent = 0;
}

//atualizar placar
function updatePlacar() {
  document.querySelector(`#score--${activePlayer}`).textContent =
    playerScore[activePlayer];

  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
}

//Mudar player ativo
function changePlayerActive() {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
  activePlayer = activePlayer === 1 ? 2 : 1;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
}

//clicar em rolldice
btnRollDice.addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  imgDiceNumber.src = `./img/dice-${diceNumber}.png`;

  //mostrar imagen
  if (imgDiceNumber.classList.contains('hidden')) {
    imgDiceNumber.classList.remove('hidden');
  }

  //dados diferente de 1 soma os pontos
  if (diceNumber !== 1) {
    currentScore += diceNumber;

    //escreve os pontos no player ativo
    updatePlacar();
  } else {
    //reseta os pontos
    currentScore = 0;
    updatePlacar();

    //chama troca o player ativo
    changePlayerActive();
  }

  updatePlacar();
});

//hold guardar valor e somar score
btnHold.addEventListener('click', function () {
  //atualiza os pontos do jogador ativo
  playerScore[activePlayer] += currentScore;

  //validar pontuação 100 no maximo
  if (playerScore[activePlayer] < 100) {
    currentScore = 0;
    updatePlacar();
    changePlayerActive();
  } else {
    currentScore = 0;
    updatePlacar();
    btnHold.disabled = true;
    btnRollDice.disabled = true;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner', 'name');
  }
});

//Novo game ou resetar game
btnMewGame.addEventListener('click', startReset);

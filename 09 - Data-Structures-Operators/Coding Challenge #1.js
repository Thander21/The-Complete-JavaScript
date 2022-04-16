'use strict';

// Data needed for a later exercise
//const flights =
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;
console.log(`Player 1 = ${player1}`);
console.log(`Player 2 = ${player2}`);

const [gk, ...fildPlayers] = player1;
console.log(`Goleiro = ${gk}`);
console.log(`Player 1 jogadores de campo = ${fildPlayers}`);

const allPlayers = [...player1, ...player2];
console.log(`Todos os jogadores ${player1} ${player2}`);

const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(`Adicção de jogadores no time 1 = ${player1Final}`);

const { team1, x: draw, team2 } = game.odds;
console.log(`Time 1 ${team1}, Time 2 ${team2}, e empate ${draw}`);

function printGoals(...playerMakeGoal) {
  console.log(`${playerMakeGoal}`);
  console.log(`${playerMakeGoal.length}`);
}

printGoals(...game.scored);

team1 < team2 && console.log('Team 1 tem mais probalidade de vencer');
team1 > team2 && console.log('Team 2 tem mais probalidade de vencer');


'use strict';
// const dolphinsScore = [44, 23, 71];
// const koalasScore = [65, 54, 49];

const dolphinsScore = [85, 54, 41];
const koalasScore = [23, 34, 27];

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolhins = calcAverage(dolphinsScore[0], dolphinsScore[1], dolphinsScore[2]);
const avgKoalas = calcAverage(koalasScore[0], koalasScore[1], koalasScore[2]);

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        return console.log(`Dolhins é o Campeão 🏆 (${avgDolhins} Vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolhins * 2) {
        return console.log(`Koalas é o Campeão com ${avgKoalas}`);
    } else console.log(`Não houve campeão`);
}

checkWinner(avgDolhins, avgKoalas);
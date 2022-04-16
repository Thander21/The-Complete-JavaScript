//Bonus 1
const dolphins = [97, 112, 101]
const koalas = [109, 95, 123]

//Bonus 2
// const dolphins = [ 97, 112, 101 ]
// const koalas = [109, 95, 106]

//Modelo 1
// const dolphins = [89, 108, 99]
// const koalas = [88, 91, 110]


//calcular media dos pontos 
function totalScore(score1, score2, score3) {
    let media = (score1 + score2 + score3) / 3
    return media
}

const dolphinsScores = totalScore(dolphins[0], dolphins[1], dolphins[2]).toFixed(2)
const koalasScores = totalScore(koalas[0], koalas[1], koalas[2]).toFixed(2)

if (dolphinsScores >= 100 || koalasScores >= 100) {

    if (dolphinsScores === koalasScores) {
        console.log(`Empate, não houve campeão a pontução é igual: ${dolphinsScores} = ${koalasScores}`)
    } else if (dolphinsScores > koalasScores) {
        console.log(`Dolphins é o Campeão, com ${dolphinsScores} 🏆`)
    } else console.log(`Koalas é o Campeão, com ${koalasScores}`)

} else console.log(`Não houve campeão, nenhum pontuação: ${dolphinsScores}, ${koalasScores} é maior que 100 `)

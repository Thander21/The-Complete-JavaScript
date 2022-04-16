// const mark = {weight: 78, tall: 1.69}
//const john = {weight: 92, tall: 1.95}

const mark = { weight: 95, tall: 1.88 }
const john = { weight: 85, tall: 1.76 }

function BMI(peso, altura) {
    let indMassaCorporal = peso / (altura ** 2)
    return indMassaCorporal
}

const markBMI = BMI(mark.weight, mark.tall).toFixed(2)
const johnBMI = BMI(john.weight, john.tall).toFixed(2)

const markHigherBMI = markBMI > johnBMI

if (markHigherBMI) {
    console.log(`Mark tem o IMC (${markBMI}) maior que o de John (${johnBMI})`)
} else {
    console.log(`Jonh tem o IMC (${johnBMI}) maior que o de Mark (${markBMI})`)
}


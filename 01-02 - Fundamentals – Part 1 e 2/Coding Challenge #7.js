'use strict';

//const mark = {weight: 78, tall: 1.69} ou 95 1.88
//const john = {weight: 92, tall: 1.95} ou  85 1,76

const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    tall: 1.69,
    calcBMI: function () {
        this.bmi = (this.weight / (this.tall ** 2)).toFixed(2);
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    weight: 92,
    tall: 1.96,
    calcBMI: function () {
        this.bmi = (this.weight / (this.tall ** 2)).toFixed(2);
        return this.bmi;
    }
};

mark.calcBMI();
console.log(mark.bmi)
john.calcBMI();
console.log(john.bmi)

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} tem o IMC (${mark.bmi}) maior que o de ${john.fullName} (${john.bmi})`);
} else {
    console.log(`${john.fullName} tem o IMC (${john.bmi}) maior que o de ${mark.fullName} (${mark.bmi})`);
}


'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totalBills = [];


function calcTip() {
        for (let i = 0; i < bills.length; i++) {

                if (bills[i] >= 50 && bills[i] <= 300) {
                        tips.push(bills[i] * 0.15);

                } else {
                        tips.push(bills[i] * 0.2);
                }

                totalBills.push(bills[i] + tips[i]);
        }
}

calcTip()
console.log(bills)
console.log(tips)
console.log(totalBills)

const arr = [];
let average = 0;

// function calcAvareg2(arr2){
//     let soma = 0;
//     for(let i = 0; i < arr2.length; i++){
//         soma += arr2[i]
//     }
// }

function calcAverege() {
        for (let i = 0; i < bills.length; i++) {
                arr.push(bills[i])
        }

        for (let i = 0; i < tips.length; i++) {
                arr.push(tips[i])
        }

        for (let i = 0; i < totalBills.length; i++) {
                arr.push(totalBills[i])
        }

        for (let i = 0; i < arr.length; i++) {
                average += arr[i]
        }
        console.log(average)

        average = average / arr.length;
}

calcAverege();
console.log(arr)
console.log(average)
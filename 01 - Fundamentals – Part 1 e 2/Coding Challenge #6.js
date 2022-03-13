
const bills = [125, 555, 44, 90, 678, 234, 12, 301, 299];
let allBills = [];


function calcTip(bill) {
        bills.forEach(bill => {
                allBills.push(bill >= 50 && bill <= 300 ? (bill * 1.15).toFixed(2) : (bill * 1.2).toFixed(2))
        });
}

calcTip(bills)

console.log(allBills)
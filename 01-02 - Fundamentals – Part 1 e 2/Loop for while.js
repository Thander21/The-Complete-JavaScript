const years = [1991, 1978, 2016, 2019];
const age = [];

for (let i = 0; i < years.length; i++) {
    age.push(2022 - years[i]);
}

console.log(age);



let dice = 0

while (dice !== 2) {
    dice = Math.trunc(Math.random() * 2) + 1;
    console.log(dice);
}
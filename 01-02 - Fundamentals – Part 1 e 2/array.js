function calcAge(year) {
    return 2022 - year
}

const years = [1991, 1928, 1978, 1988, 2012, 2016, 2019];
let ages = [];

years.forEach(year => {
    console.log(calcAge(year))
    ages.push(calcAge(year))
});

console.log(ages)
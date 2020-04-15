let principal = 200000;
let rate = 0.05;
let years = 30;
let monthlyInterestRate = rate / 12;
let periods = years * 12;
let creditScore = 700;
const name = "Drew";



const mortgageCalculator = (p, i, n, credit) => {

    if (credit > 740) {
        i = (rate - 0.005) / 12;
    } else if (credit < 660) {
        i = (rate + 0.005) / 12;
    }

    let numerator = ( i * Math.pow((1 + i), n) );
    let denominator = ( Math.pow((1 + i), n) - 1);
    let monthlyRate = ( p * (numerator / denominator) );
    return `${name}, your monthly rate is ${monthlyRate}`;
}

console.log(mortgageCalculator(principal, monthlyInterestRate, periods, creditScore));
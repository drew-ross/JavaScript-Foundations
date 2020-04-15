let principal = 200000;
let rate = 0.05;
let years = 30;
let monthlyInterestRate = rate / 12;
let periods = years * 12;
const name = "Drew";



const mortgageCalculator = (p, i, n) => {
    let numerator = ( i * Math.pow((1 + i), n) );
    let denominator = ( Math.pow((1 + i), n) - 1);
    let monthlyRate = ( p * (numerator / denominator) );
    return `${name}, your monthly rate is ${monthlyRate}`;
}

console.log(mortgageCalculator(200000, monthlyInterestRate, periods));
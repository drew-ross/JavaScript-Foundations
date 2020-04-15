let principal = 200000;
let rate = 0.05;
let years = 30;
let periods = years * 12;
let creditScore = 600;
const name = "Drew";



const mortgageCalculator = (principal, rate, periods, credit) => {

    if (credit > 740) {
        rate -= .005;
    } else if (credit < 660) {
        rate += .005;
    }
    let monthlyInterestRate = rate / 12;

    let numerator = ( monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods) );
    let denominator = ( Math.pow((1 + monthlyInterestRate), periods) - 1);
    let monthlyRate = ( principal * (numerator / denominator) );
    return `${name}, your monthly rate is ${monthlyRate} with a credit score of ${credit}`;
}

const variableInterestRate = (principal, rate, periods) => {

    console.log("Your input rate is " + rate);
    rate -= .02;
    let monthlyInterestRate = rate / 12;

    for (let i = 0; i < 10; i++) {
        let numerator = ( monthlyInterestRate * Math.pow((1 + monthlyInterestRate), periods) );
        let denominator = ( Math.pow((1 + monthlyInterestRate), periods) - 1);
        let monthlyRate = ( principal * (numerator / denominator) );
        console.log(`${name}, at ${rate} interest rate, your monthly rate is ${monthlyRate}`);
        
        rate += .005;
        monthlyInterestRate = rate / 12;
    }

    
}

console.log(mortgageCalculator(principal, rate, periods, creditScore));
variableInterestRate(principal, .04, periods);
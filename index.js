const inputPrincipal = document.querySelector("#principal");
const inputRate = document.querySelector("#rate");
const inputYears = document.querySelector("#years");
const inputCredit = document.querySelector("#credit");
const btnSubmit = document.querySelector("#submit");
const result = document.querySelector("#result");

let principal;
let rate;
let years;
let periods;
let creditScore;
let payment;
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
    return monthlyRate;
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

btnSubmit.addEventListener("click", function(){
    principal = Number(inputPrincipal.value);
    rate = .01 * Number(inputRate.value); //User inputs %, must convert to decimal
    years = Number(inputYears.value);
    periods = years * 12;
    creditScore = Number(inputCredit.value);

    payment = mortgageCalculator(principal, rate, periods, creditScore);
    payment = (100 * Math.round(payment) / 100);
    
    if(isNaN(payment)) {payment = 0}
    result.value = payment;
});
/*  Compound Interest
Write a JS function that calculates the total accumulated value for a monetary 
deposit by given principal sum, interest rate, compounding frequency and overall
length. The input comes as an array of strings that need to be parsed as a numbers. 
The first value is the principal sum, the second is the interest rate in percent, 
the third is the compounding period in months and the final value is the total 
timespan, given in years.
The output should be printed to the console, with two decimal places.

Examples
Input               Output
[1500, 4.3, 3, 6]   1938.84
[100000, 5, 12, 25] 338635.49
*/

function compoundInterest([mony, rate, addingPeriod, timespan]){
    [mony, rate, addingPeriod, timespan] =
    [mony, rate, addingPeriod, timespan].map(Number);

    rate = rate / 100; 
    frequency = 12 / addingPeriod;

    let total = mony *
     Math.pow((1 + rate / frequency), frequency * timespan);

    console.log(total.toFixed(2));
}
compoundInterest([1500, 4.3, 3, 6]);
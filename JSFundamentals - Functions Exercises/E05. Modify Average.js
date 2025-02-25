﻿/*  Modify Average
Write a JS program that modifies a number until the average value of all of 
its digits is higher than 5. In order to modify the number, your program 
should append a 9 to the end of the number, when the average value of all of
its digits is higher than 5 the program should stop appending. If the 
number’s average value of all of its digits is already higher than 5, no
appending should be done.
The input is a single number received as an array of strings.
The output should consist of a single number - the final modified number which
has an average value of all of its digits higher than 5. The output should be
printed on the console.
Constraints
•   The input number will consist of no more than 6 digits.
•   The input will be a valid number (there will be no leading zeroes).

Examples
Input   Output
[101]   1019999
[5835]  5835
 */

function modifyAverage(input){
    let inpitArr = input.toString().split(''); //make arr of strings
    inpitArr = inpitArr.map(Number);           //make arr of numbers
    let sum = sumatorArr(inpitArr);
    while(sum / inpitArr.length <= 5){
        inpitArr.push(9);
        sum = sumatorArr(inpitArr);
    }
    let result = parseInt(inpitArr.join(""), 10);
    console.log(result);

    function sumatorArr(arr){
        return arr.reduce((a,b) => a + b);
    }
}
modifyAverage(["101"]);
modifyAverage(["5835"]);
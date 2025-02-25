﻿/*    Cooking by Numbers
Write a JS program that receives a number and a list of five operations. 
Perform the operations in sequence by starting with the input number and 
using the result of every operation as starting point for the next. Print the
result of every operation in order. The operations can be one of the
following:
    •   chop – divide the number by two
    •   dice – square root of number
    •   spice – add 1 to number
    •   bake – multiply number by 3
    •   fillet – subtract 20% from number
The input comes as an array of 6 string elements. The first element is your 
starting point and must be parsed to a number. The remaining 5 elements are 
the names of operations to be performed.
The output should be printed on the console.
Examples
Input                                 Output
[32, chop, chop, chop, chop, chop]    16
                                      8
                                      4
                                      2
                                      1

Input                                 Output
[9, dice, spice, chop, bake, fillet]  3
                                      4
                                      2
                                      6
                                      4.8
 */

function cookingByNumbers(input){
    let num = Number(input[0]);
    for (let i = 1; i <= 5; i++){
        switch(input[i]){
            case "chop": num = num / 2;
                break;
            case "dice": num = Math.sqrt(num);
                break;
            case "spice": num += 1;
                break;
            case "bake": num = num * 3;
                break;
            case "fillet": num -= num * 0.2;
            default: break;
        }
        console.log(num);
    }
}
cookingByNumbers([32, "chop", "chop", "chop", "chop", "chop"]);
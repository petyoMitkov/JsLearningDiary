/*  Negative / Positive Numbers
Write a JS function that processes the elements in an array one by one 
and produces a new array. Prepend each negative element at the front of the result
and append each positive (or 0) element at the end of the result.
The input comes as array of string elements holding numbers.
The output is printed on the console, each element on a new line.
Examples
Input                    Output     
['7', '-2', '8', '9']   -2
                         7
                         8
                         9
Input                    Outpu
['3', '-2', '0', '-1']  -1
                        -2
                         3
                         0
 */

function negativePositiveNumbers(arr){
    arr = arr.map(Number);
    let result = [];
    for (let element of arr){
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }
    result.forEach(x => console.log(x));
}
negativePositiveNumbers(['3', '-2', '0', '-1']);
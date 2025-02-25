/*    Inside Volume
Write a JS function that determines whether a point is inside 
the volume, defined by the box, shown on the right.The input comes 
as an array of string elements that need to be parsed as numbers. 
Each set of 3 elements are the x, y and z coordinates of a point.
The output should be printed to the console on a new line for each point.
Print inside if the point lies inside the volume and outisde otherwise.

Examples
Input              Output
[8, 20, 22]        outside
[13.1, 50, 31.5,   inside
50, 80, 50,        inside
-5, 18, 43]        outside
*/

function insideVolume(input){
    for (let i = 0; i < input.length; i += 3){
        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];

        if (innerValue(x, y, z)) {
            console.log("inside");
        } else {
            console.log("outside");
        }       
    }

    function innerValue(x, y, z){
        let xMin = 10, xMax = 50;
        let yMin = 20, yMax = 80;
        let zMin = 15, zMax = 50;

        if (x <= xMax && x >= xMin ){
            if (y <= yMax && y >= yMin){
                if (z <= zMax && z >= zMin){
                    return true;
                }                   
            }
        } else {
            return false;
        }
    } 
}
insideVolume([8, 20, 22]);
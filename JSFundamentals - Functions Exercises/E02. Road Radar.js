﻿/*    Road Radar
Write a JS function that determines whether a driver is within the speed limit. You will receive 
his speed and the area where he’s driving. Each area has a different limit: on the motorway the 
limit is 130 km/h, on the interstate the limit is 90, inside a city the limit is 50 and within a 
residential area the limit is 20 km/h. If the driver is within the limits, your function prints 
nothing. If he’s over the limit however, your function prints the severity of the infraction. For 
speeds up to 20 km/h over the limit, he’s speeding; for speeds up to 40 over the limit, the 
infraction is excessive speeding and for anything else, reckless driving.
The input comes as an array of string elements. The first element is the current speed and needs 
to be parsed as a number, the second element is the area where.
The output should be printed to the console. Note in certain cases there will be no output.

Examples
input           Output
[40, city]  
[21, residential]   speeding
[120, interstate]   excessive speeding
[200, motorway]     reckless driving
 */
/* Task logic
motorway    130 km/h    
interstate  90 km/h     
city        50 km/h
residential 20 km/h

0  <= 20    speeding
20 <= 40    excessice spreeding 
for > 40    reckless driving
 */

function roadRadar([speed, area]){

    let infraction = getInfraction(speed, getLimitByArea(area));
    if (infraction) console.log(infraction);

    //Returns speed limit in the given area
    function getLimitByArea(area){          
        switch(area){
            case "motorway": return 130;
            case "interstate": return 90;
            case "city": return 50;
            case "residential": return 20;
        }
    }   
    //Returns string as result of subtraction between 
    //speed and area limit (comes from getLimitByArea())
    function getInfraction(speed, func){   
        let overSpeed = speed - func;       
        if (overSpeed <= 0) {
            return false;
        } else {
            if (overSpeed > 0 && overSpeed <= 20) 
                return "speeding";
            if (overSpeed > 20 && overSpeed <= 40) 
                return "excessive speeding";
            if (overSpeed > 40) 
                return "reckless driving";
        }
    }
}
roadRadar([40, "city"]);
roadRadar([21, "residential"]);
roadRadar([120, "interstate"]);
roadRadar([200, "motorway"]);
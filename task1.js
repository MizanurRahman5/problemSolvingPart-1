/**
 * celsius to fahrenheit
 */

function celsiusToFarenhite (celsius){
    const farenhite = (celsius * 9/5) + 32;
    return farenhite;
}

const celsius = 1;
const result = celsiusToFarenhite(celsius);
console.log(result);
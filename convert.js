/**
 * 
 * inch to Feet 
 * 
 */

function inchToFeet (inch){
    const feet = inch / 12;
    const feets = parseInt(feet);
    const inches = inch % 12;
    const result = feets + ' feet ' + inches + ' inches';
    return result;
}

const inch = 75;
const result = inchToFeet(inch);

// console.log(result);


/**
 * mile to kilometers
 */

function mileToKilo (mile){

    const kilo = mile * 1.60934;
    const kilomiter = kilo.toFixed(2)
    return kilomiter;

}

const mile = 5;

const result2 = mileToKilo(mile);

console.log(result2);

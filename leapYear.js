/**
 * leep year ber kora 
 */

function leepYear (year){
    if (year % 100 !== 0 && year % 4 === 0){
        return true;
    }else if(year % 400 === 0){
        return true;
    }else {
        return false;
    }
}

const leapYear = 2000;
const result = leepYear(leapYear)
console.log(result)
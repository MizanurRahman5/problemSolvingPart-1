/**
 * odd number avarage calculation
 */
function oddNumber (array){

    let sum = 0;

    for (let Number of array){
        if (Number % 2 !== 0){
            sum = sum + Number;
        }
    }
    const result = sum / array.length;
    return result.toFixed(2);

}

const array = [1,2,3,4,5,6,7];
const result = oddNumber(array);
console.log(result);
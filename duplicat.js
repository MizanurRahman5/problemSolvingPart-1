/**
 * duplicat check 
 */

function duplicatCheck(array){

    let unique = [ ];

    for (let arr of array){

        if (unique.includes(arr) === false){
            unique.push(arr);
        }
    }
    return unique;
    
}

const array = ['a', 'e', 'b', 'a', 'c', 'd', 'd'];
const result = duplicatCheck (array);
// console.log(result);



/**
 * check dullicat number
 */


function checkDuplicateNumber(array){
    let unique = [ ];

    for (let arr of array){
        if (unique.includes(arr) === false){
            unique.push(arr);
        }
    }
    return unique;

}

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 2, 3, 4, 5,];
const result2 = checkDuplicateNumber (array2);
console.log(result2);

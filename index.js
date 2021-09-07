/* Arrays */
/* 1 */

const array = [1, 2, 3, 4, 5, 6, 7];

/* 2 */
const summNumbersLessFive = array.reduce((summValue, currentValue) =>{
    if(currentValue < 5){
        return summValue + currentValue;
    }return summValue;

})

/* 3 */
const array2 = array.map(function(value){
    if (5 < value & value < 10){
        return value;
    }
});
console.log(array2);

/* Arrays */
/* 1 */

/*Тут что то не то */
const array = [1, 2, 3, 4, 5];

const summNumbersLessFive = array.reduce((summValue, currentValue) =>{
    if(currentValue <= 4){
    return summValue + currentValue
    }
})

console.log(summNumbersLessFive);

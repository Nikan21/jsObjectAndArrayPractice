/* Arrays */
/* 1 */

const array = [1, 2, 3, 4, 5];

for (let i = 0; i <= array.length; i++) {
    const element = array[i];
    if (element >= 5){
        continue
    }else{
        const reduceSumm = (accum, value) =>{
            return accum + value;
        }
        const summArray = array.reduce(reduceSumm);
        console.log(summArray);

    }
}

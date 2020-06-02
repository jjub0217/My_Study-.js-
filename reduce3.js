const numbers = [1, 2, 3, 4, 5];

const avg = numbers.reduce((acc, cur, index, array) =>{
    if ( index === array.length -1) {
        return (acc + cur) / array.length;
    }
    return acc + cur;
}, 0);
console.log(avg);

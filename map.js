// map 은 배열안의 요소를 변환할때 사용한다. 
// 모든 요소를 변환하고 싶을때 사용한다. 

// 만약에 이 배열안에 잇는 모든 숫자를 제곱해서 새로운 배열을 만든다면?

const arrays = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];

// for (let i = 0; i < arrays.length; i++){
//     squared.push(arrays[i] * arrays[i]);
// }
// console.log(squared);

// [ 1, 4, 9, 16, 25, 36, 49, 64 ]

function print (array) {
    console.log(array * array);
}

arrays.forEach(print);

// arrays.forEach( function (array) {
//     squared.push(array * array);
// });
// console.log(squared);

// arrays.forEach( array => {
//    squared.push(array * array);
// })
// console.log(squared);

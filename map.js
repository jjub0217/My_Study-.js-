// 만약에 이 배열안에 잇는 모든 숫자를 제곱해서 새로운 배열을 만든다면?

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];

for (let i = 0; i < array.length; i++){
    squared.push(array[i] * array[i]);
}

console.log(squared);


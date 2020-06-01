// 요소를 추가할때 사용한다.
// 원본 배열을 수정한다.

const numbers = [10, 20, 30, 40];

numbers.unshift(5);
console.log(numbers);
// [ 5, 10, 20, 30, 40 ]

// 원본 배열의 요소들의 맨 앞에 unshift를 통해 새로운 요소가 추가된다. 
// 그래서 unshift 를 통해서 기존의 배열을 수정하게 된다. 

// unshift 를 통해서 numbers 배열의 맨 앞에 5 라는 요소를 추가하고, 원본 배열을 수정하게 된다,


const array = [10, 20, 30, 40];

const newArray = [3, ...array];
console.log(newArray);

// 스프레드 문법은 배열을 추가시켜서 바뀐 새로운 배열을 반환하는 역할을 한다.
// 하여, 스프레드 문법을 추가시킬 요소의 앞에 쓰거나 뒤에 쓰거나 위치에 따라서 
// 배열의 모양이 바뀐다. 

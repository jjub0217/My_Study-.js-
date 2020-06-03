// map 은 배열안의 요소를 변환할때 사용한다. 
// 모든 요소를 변환하고 싶을때 사용한다. 
// map은 배열이 있을때, 그 배열 안에 있는 요소들을 가지고 전체적으로 변환을 해주고 싶을때 사용한다.

// 만약에 이 배열안에 잇는 모든 숫자를 제곱해서 새로운 배열을 만든다면?

const arrays = [1, 2, 3, 4, 5, 6, 7, 8];


/////////////////////////////////////////////////

// 1. 해결답 1번 

const squared = [];
for (let i = 0; i < arrays.length; i++){
    squared.push(arrays[i] * arrays[i]);
}
console.log(squared);

// [ 1, 4, 9, 16, 25, 36, 49, 64 ]

// 위 for문은 인덱스가 1씩 증가시켜져야 하는 반복문이기 때문에 인덱스가 필요하다.
// 하여, 인덱스를 사용하여 for문을 사용하였다.
// 위 코드를 forEach 문을 사용하면 아래 코드처럼 하면 된다.

// 2. 해결답 2번 
const squared = [];
function print (array) {
    console.log(array * array);
}

arrays.forEach(print);

// 1 4 9 16 25 36 49 64

// 위 코드는 forEach문을 사용한 코드이다. 
// forEach문에서는 증감식이 필요없으므로 인덱스가 필요없고, 때문에 배열의 요소값을 의미하는 새로운 단어를 매개변수로 사용해야 한다.
// 그래서 제일 위코드에서 배열을 선언한 변수의 이름을 따서 배열의 요소를 나타내는 "array" 라는 단어를 
// 매개변수로 사용하엿다. 
// 위 코드를 더 간단히 하려면 아래 코드처럼 하면 된다.

// 3. 해결답 3번 
const squared = [];
arrays.forEach( function (array) {
    squared.push(array * array);
});
console.log(squared);

// [ 1, 4, 9, 16, 25, 36, 49, 64]

// 위위 코드에서 쓰인 함수를 가져다가 참조하여 쓴것이다. 함수 이름을 없애고 
// forEach 문 안에 함수를 넣었다. 
// 위 코드를 화살표 함수를 사용하면 아래 코드처럼 하면 된다.

// 4. 해결답 4번 
const squared = [];
arrays.forEach( array => {
   squared.push(array * array);
})
console.log(squared);

// [ 1, 4, 9, 16, 25, 36, 49, 64]

////////////////////////////////////////////

// map 고차함수를 사용한 해결문제 

// 1. 해결답 1번
// square 이란 함수를 만들고, 그 함수를 배열의 요소의 값의 의미를 나타내는 단어 array 이라고 써서, 그 단어를
// 매개변수로 받아오고, 그 해당 단어를 array * array 을 결과로 내보내는 함수로 코딩한다. 
// 그게 square 화살표 함수를 만드는 과정이다.
const square = array => array * array;
// 그리고 map 고차함수를 사용하여 새로운 변수에 할당한다.
// 이때 map 고차함수를 사용할때 쓰이는 괄호 안에는 위에 화살표 함수를 할당한 변수를 담아야 한다.
const squared = arrays.map(square);
// map 고차 함수 앞에는 원본 배열을 할당한 변수를 써줘야 한다.
console.log(squared);

// [ 1, 4, 9, 16, 25, 36, 49, 64]

// 2. 해결답 2번
// 위 코드처럼 square 화살표 함수를 선언하는 대신에 그 화살표 함수 자체를 아래 코드처럼 map 안에 넣어줄수도 있다. 
const squared = arrays.map(array => array * array);
console.log(squared);

// [ 1, 4, 9, 16, 25, 36, 49, 64]

const arrays = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = arrays.map(array => array * array);
console.log(squared);
// concat 과 비슷한 함수다.
// 배열 안에 있는 값들을 문자열 형태로 합쳐줄때 사용한다.

const array = [1, 2, 3];
console.log(array.join());
// 1,2,3,4,5

// 기존 배열을 풀어헤쳐서 ()을 쓰게 되면 , 이 요소값 사이사이에 들어간 하나의 문자열로 반환해주는 것이다.
// 만약에 () 안에 무언가를 넣으면, 요소값 사이사이에 괄호 안에 넣어준 것들이 들어간 하나의 새로운 문자열을 반환한다.

console.log(array.join(3));
//132333435

for (let i = 0; i < array.length; i++){
    console.log(array.join(array[i]*2));
}
// 12223 14243 16263





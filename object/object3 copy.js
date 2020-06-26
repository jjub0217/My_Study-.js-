/* 객체란?
우리가 어떠한 값을 선언하게 될때 하나의 이름에 여러 종류의 값을
넣을 수 있게 해준다. */

// 예를 들어서 우리가 한 강아지에 대한 값들을 선언한다고 가정해보자

// const dogName = '멍멍이';
// const dogAge = 2;

// console.log(dogName);
// console.log(dogAge);

// 위 처럼 코드들을 나열하기보다 객체라는 것을 사용하면 더 깔끔해진다

const dog = {
    // (이름='키') : (값)
    // 키에는 공백이 있으면 안된다. 
    // 공백이 있는 문자열을 만들려면 ' ' 로 감싸면 된다. 
    name: '멍멍이',
    age: 2, 
    cute: true,
}

console.log(dog); // {name: '멍멍이', age: 2, cute: true}
console.log(dog[0]);

console.log(dog.name); // 멍멍이
console.log(dog.age); // 2


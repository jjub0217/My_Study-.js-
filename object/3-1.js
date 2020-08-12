// 비구조 할당(= 객체 구조 분해) : 객체의 특정 프로퍼티 값을 추출해준다.
//  - 특정값들을 객체에서 빼온다.

const ironMan = {
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
}

const { name } = ironMan;
// ironMan 이라는 객체를..... 어디다 할당한거지?


console.log(name); // 토니 스타크
console.log(ironMan.name); // 토니 스타크



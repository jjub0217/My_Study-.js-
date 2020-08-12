// 비구조 할당(= 객체 구조 분해) : 객체의 특정 프로퍼티 값을 추출해준다.
//  - 특정값들을 객체에서 빼온다.

const object = {
    a: 1,
    b: 2
}

const {a, b} = object; // <- a 랑 b 값을 밖으로 꺼내주기 위함


function print({a, b}){
    console.log(a); // 1
    console.log(b); // 2
}
print(object); 
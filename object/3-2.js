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

////////////////////////////////////////////////

const nick = ['이쁜이', '애기', '이쁘니', '세지니'];
const boyFriend = {
    name : '오세진',
    age : 33,
    nickName : nick
}

function love({name, age, nickName}){
    const text = `${name}(${age})씨는 별명으로 ${nickName} 등을 갖고 있습니다.`
    console.log(text); 
}
love(boyFriend); // 오세진(33)씨는 별명으로 이쁜이,애기,이쁘니,세지니 등을 갖고 있습니다.

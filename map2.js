// 객체 배열들을 텍스트들로만 이루어진 문자열 배열로 바꾼다면?

const items = [{
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    },
]

// 화살표 함수를 할당할 새로운 변수를 만들고, (혹은 화살표 함수를 담을 함수를 작성)그 함수를 배열의 요소의 값의 의미를 나타내는 단어를 써서,
// 그 단어를 매개변수로 받아오고, 그 해당 단어를 사용하여 함수 몸체를 작성한다.
// map 고차함수를 쓰면서 사용되는 괄호 안에는 위에 화살표 함수를 할당한 변수를 담아줘야 한다.
const text = item => item.text;
const texts = items.map(text);
console.log(texts);

// [ 'hello', 'bye' ]

// 위 코드처럼 text 화살표 함수를 선언하는 대신에 그 화살표 함수 자체를 아래 코드처럼
// map 안에 넣어줄수도 있다. 
const texts = items.map(item => item.text);
console.log(texts);
// [ 'hello', 'bye' ]

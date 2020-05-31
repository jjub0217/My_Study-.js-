const superheros = [
    'Iron_man',
    'Captain_america',
    'Thor',
    'Doctor_strange'
]
// 만약에 배열안에 있는 모든 요소들을 모두 출력하고 싶으면
// for 문 쓰자

for (let i = 0; i < superheros.length ; i++){
    console.log(superheros[i]);
}
// for문은 증감식이 있기때문에, 위 코드에서는 인덱스를 1씩 증가시켜 반복시키는 
// for문을 사용하였기 때문에 인덱스 i가 필요한 것이다. 


// 위에 for문을 배열 고차함수를 사용해보자. 그래서 for문을 돌리는 대신에 
// 특정 함수를 사용해서 똑같은 작업을 해보자.
// 위의 for문과 아래 function print 로 시작되어 forEach 쓴 문까지 같은 의미이다.

function print(hero) // 여기에 인수(파라미터)로 들어가는 것들은  'Iron_man','Captain_america','Thor','Doctor_strange' 가 된다.
{
console.log(hero);
}
// print 라는 함수를 선언해준것이다.

superheros.forEach(print); // 여기에 인수(파라미터)에 위에 만든 함수이름을 넣는다.
// for문 돌린것과 같은 의미의 코드다. 
// 위 코드의 forEach 같은 경우는 증감식이 없기때문에 인덱스가 필요없다.
// 그렇기 때문에 인덱스가 필요없고, 배열의 요소를 의미하는 단어만이 필요할 뿐이다.


function print() {
    console.log("Hello");
}

// superheros.forEach(print) "superheros 배열을 forEach 써서 돌릴건데 print 함수를 써서 돌릴거야"
// 위에 function print 도 쓰고, forEach도 쓰고, 아래에 매개변수가 없는 print 함수를 쓰면 
// 위에 쓰인 function print 는 무시되고, 아래에 쓰인 function print가 실행된다.
// 이유는 매개변수가 비어있는 함수가 기본 함수이기 때문에 print 함수가 뭐인지 컴터가 찾게 되면
// 기본함수를 먼저 찾게 되고, 맨 아래에 기본함수가 쓰였기 때문에 기본함수가 실행되고 
// 기본함수가 아닌(즉, 매개변수가 있는 함수) 함수는 무시되어 실행되지 않는다. 
// 예시) 기본함수 : 무지 양말 / 기본함수가 아닌(즉, 매개변수가 있는 함수) 함수 : 줄무늬 양말
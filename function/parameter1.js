// function addNumber(a, b) { // 매개변수 : <- 이 줄에서 말하는 a 와 b 는 
                             //함수를 실행할때 "필요하다고" "미리" "지정"한 값이다. 
//     let sum = a + b;
//     console.log(sum);
// }

let num1 = Number(prompt('첫번째 숫자는?'));
let num2 = Number(prompt('두번째 숫자는?'));
addNumber(num1, num2);

function addNumber(a, b){
let sum = a + b;
alert(`두수를 더한 값은 ${sum}입니다.`);
} 


// 함수 몸체 외부에서는 함수 이름으로 함수를 참조할수 없기 때문에 
// 함수 몸체 외부에서는 함수 이름으로 함수를 호출할수 없다. 
// 하지만 함수 몸체 외부에서 함수 이름으로 함수를 호출해도 정상적으로 동작하는 이유는
// 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 
// JS엔진이 암묵적으로 생성하고, 생성된 함수 객체를 할당한다. 
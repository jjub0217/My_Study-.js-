let num1 = Number(prompt('첫번째 숫자는?'));
let num2 = Number(prompt('두번째 숫자는?'));
let result = addNumber(num1, num2);
alert(`두 수를 더한 값은 ${result}입니다.`)

function addNumber(a, b) {
    let sum = a + b;
    return sum;   //  return(반환값) : 함수의 결과값을 함수 밖으로 넘기는 값
                // 반환값: 함수 밖으로 넘겨서, 다른 계산에 적용하거나 써먹거나, 
                // 다른곳에 표시 해야 할때 함수의 결과값을 return해서 사용한다. 
}

 // 반환문(return문) :
 /* 1. 함수를 종료시키는 역할을 한다. 
        - 함수를 종료시키는 역할을 하기 때문에 함수 내부의 가장 끝에 위치해야 한다. 
        - return 문 뒤에 같은 코드블럭 내에서 다른 작업을 하거나 또 return 을 해도 무시된다.
        ex) */
        function add(x, y){
            return x + y;
            console.log(add(1, 2)); // <- 해당 콘솔로그 문은 무시된다. 
        }
        console.log(add(1, 2)); // 3





// 배열이 주어졌을때, 배열 안에 있는 모든 값들을 사용하여 어떤 값을 연산해야 할때 사용한다.

// 숫자들을 계산할 경우
// 예제 1번
//모든 배열의 요소들을 더해서 총합을 구해보면?

const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach(n => // 여기서 n 은 각각의 요소들을 가리키게 된다. 
//     sum += n)  // sum = sum + n
//     console.log(sum);

// 위 코드처럼 forEach 문을 돌려서 요소를 하나씩 꺼내와서 
// 그걸 더하는 코딩을 할수 있는데, 위 코드를 reduce 함수를 써서 한줄로 코딩하려면 아래 코드처럼 하면 된다.
    
const sum = numbers.reduce((accumulator, current) => 
// 첫번째 매개변수에는 누적된 값을 계산할건데, 그 값을 계산하는 함수를 첫번째 매개변수에 넣어줄거다.  : "(accumulator, current)"
// 그 함수는 두개의 매개변수를 받을건데, 첫번째는 accumulator 라는 걸 받아오고,  두번째는 current 을 받아올 것이다.
accumulator + current,
// 그리고 그 결과값으로는 이 값을 어케 연산할건지 설정할건데, 여기서는 우리가 accumulator + current 라고 설정할것이다.
0 );
// 그리고 나서 두번째 매개변수로, 함수 다음에 넣어줘야 하는 값은 accumulator 의 기본값(초기값)
console.log(sum);




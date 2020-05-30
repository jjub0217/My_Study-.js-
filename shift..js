const numbers = [10, 20, 30, 40];

const value = numbers.shift();
console.log(value);
// 10

// 배열의 앞쪽의 요소가 배열에서 빠져나와서 shift 를 통해서 value 안으로 들어가지게 된다. 
// 그래서 shift 를 통해서 기존의 배열을 수정하게 된다. 

console.log(numbers);
// [20, 30, 40]

// shift 를 통해서 value에 10을 할당함으로써 기존 배열의 numbers 에서 10은 빠지게 된다. 
// 위쪽에 shift를 쓴 부분에 numbers.shift(); 을 여러번 하면 두번째 세번째 요소도 그 만큼 빠지게 된다. 
// 배열안에 아무것도 없어질때까지 빠지게 된다.
// 요소의 사이즈(즉, length) 보다 더 많이 shift를 쓰게 되면 계속해서 빈 배열만 나오게 된다.

// shift는 맨 앞에 있는 요소 하나씩 바닥 날때까지 밖으로 꺼내는 걸 의미한다. 
// shift는 맨 먼저 들어간 요소부터 빠져나오기 때문에 자료구조에서는 '큐'로 구현할 수 있다.


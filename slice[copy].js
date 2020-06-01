// 배열을 복사할때 사용한다.
// splice 와의 차이점은 원본 배열을 건드리지 못한다.
// slice 메소드를 까보면 (start?: number, end?: number) 라고 나오는데 
// 여기서 말하는 start 라는 파라미터는 복사를 시작할 인덱스이고 end 파라미터는 복사를 종료할 인덱스인데, 이 end 인덱스에 해당하는 요소는 복사 안된다.
 

const numbers = [ 10, 20, 30, 40];

const sliced = numbers.slice(0, 2); // 0번째 인덱스부터 2개의 요소를 복사한다.
console.log(sliced);
// [ 10, 20 ]
console.log(numbers); // 기존의 배열은 바뀌지 않는다. 
// [ 10, 20, 30, 40 ]


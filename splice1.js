// 특정 항목을 중간에 있는 요소를 제거하거나 추가할때 사용한다.
// 제거를 하게 되는 과정에서 제거하려는 해당 요소가 몇번째인지 명시를 해주기도 한다.
// 원본 배열을 수정한다.

////// 제거하려는 해당 요소가 몇번째 인지 명시해준 경우
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30); // numbers 라는 배열의 요소값 '30' 인덱스를 찾아라
console.log(index); // 그 인덱스가 몇번째 인덱스냐?
// 2 

const spliced = numbers.splice(index, 2); // numbers 라는 배열에서 위에서 말한 그 인덱스부터 2개의 요소를 제거할거야.
console.log(spliced); // 그 제거할거가 뭐냐?
// [ 30, 40 ]

console.log(numbers); // 다 제거하고 남은건 뭐냐? 
// [ 10, 20 ]

////// 제거하려는 해당 요소 명시 안해준 경우
//예시 1번

const arr = [1, 2, 3, 4];
const result = arr.splice(1, 2, 20, 30); 
// arr 이라는 배열에서 1번째 인덱스부터 2개의 요소를 제거하고 / 제거한 그 자리에 요소값으로 20 이랑 30을 추가삽입해라
console.log(result); // arr 이라는 배열에서 1번째 인덱스투버 2개의 요소를 제거할건데, 그 제거한거가 뭐냐?
// [2, 3]
console.log(arr); // 그 제거한 그 자리에 20 이랑 30을 중간에 추가 삽입한 결과값을 출력해라. 
// [1, 20, 30, 4]

//예시 2번

const array = [ 1, 2, 3, 4];
const resultArray = array.splice(1); // 1번째 인덱스부터 뒤 요소 다 제거해라
console.log(resultArray); // 그 제거한게 뭐냐?
// [ 2, 3, 4]
console.log(array); // 제거하고 남은게 뭐냐?
// [1]






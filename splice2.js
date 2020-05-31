const arr = [1, 2, 3, 1, 2];

function remove(array, item) { // 아래에 호출한 remove 함수의 인수 arr 이랑 2 가 매개변수 array 이랑 item에 순서대로 들어간다.
  const index = array.indexOf(item); // 매개변수 item에 들어간 인수가 2 일때, 요소값 2 의 인덱스를 구해라.
  console.log(index); // 요소값 2의 인덱스가 뭐냐?
// 1 

  if (index !== -1) array.splice(index, 1); // 그 인덱스가 -1이 아닌게 true면  array.splice(index, 1) 를 실행해라
  // 그렇다면  array.splice(index, 1) 이 뭐냐?
  // 매개변수 array에 들어간 인수가 arr 이라는 배열이니까, arr 이라는 배열에서 그 인덱스부터 1개의 요소를 제거해라
 
  return array; 
}

console.log(remove(arr, 2)); 
// // [1, 3, 1, 2]

console.log(remove(arr, 10)); 
// [1, 3, 1, 2]

// 위는 item이란 매개변수에 10 이라는 인수를 전달해준것이다.



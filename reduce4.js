// 숫자 아닌 경우로 계산할 경우
// 예제 1번

// 배열에서 각 알파벳들이 몇개씩 있는지 세서, 객체에다가 결과를 넣어라.

const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
// 첫번째 인수로, 각 요소들에 대하여 루프를 돌려서 누적된 값을 연산하는 함수를 넣는다.
const counts = alphabets.reduce((acc, cur) => {
    if (acc[cur]) {
        console.log(acc[cur]);

        acc[cur] += 1;
    } else {
        acc[cur] = 1;
    }
    return acc;
}, {})

console.log(counts);
// { a: 3, b: 1, c: 2, d: 1, e: 1 } 
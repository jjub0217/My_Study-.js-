// 배열의 요소를 정렬한다.
// 원본 배열을 변경하며 정렬된 배열을 반환한다.
// 기본적으로 오름차순으로 정렬한다.

// const fruits = [ 'banana', 'orange', 'apple'];

// fruits.sort();
// console.log(fruits);

// [ 'apple', 'banana', 'orange' ]

// 위 코드는 fruits 라는 배열을 오름차순으로 정렬한 코드이다.
// 알파벳 순 오름차순으로 정렬되어있다.

// const fruits = [ 'banana', 'orange', 'apple'];
// const result = fruits.sort();
// console.log(result);

// [ 'apple', 'banana', 'orange' ]

// 기본적으로는 오름차순 정렬이지만 내림차순 정렬으로도 할수 있다.
// 내림차순으로 정렬하려면 일단 먼저 오름차순으로 정렬 후 -> reverse 메소드를 사용해서 역순 시켜야 한다.

// const fruits = [ 'banana', 'orange', 'apple'];

// fruits.sort();
// fruits.reverse();
// console.log(fruits);

// [ 'orange', 'banana', 'apple' ]

const points = [40, 100, 1, 5, 2, 25, 10];

// sort 함수에서 숫자 오름차순 내림차순 할때 기본 모양이 .sort((a, b) => a - b)이다. 
// 화살표 함수가 잘 이해되지 않아서 sort 메소드의 기본 모양인 화살표 함수를 함수 표현식으로 나타내면 아래 코드처럼 하면 된다.

function upper() {
    points.sort(function (a, b) {
        return a - b})}
upper();
console.log(points);

// [ 1, 2, 5, 10, 25, 40, 100 ]

// 위 코드는 points 라는 숫자요소들로 되어있는 배열을 오름차순 하는 코드이다.
// sort 함수는 기본적으로 오름차순으로 되어있지만, 숫자 요소들은 유니코드에 의하여 정렬되는데 
// 각각의 숫자들이 갖고 있는 유니코드가 다르기 때문에 숫자들은 내가 의도한대로 sort 메소드만 쓰면 오름차순이 되지 않는다.
// 하여, 숫자요소들을 오름차순 또는 내림차순 하려면 비교함수를( - )를 사용하여야 한다. 

function upper() {
    points.sort((a, b) => a - b)
}
upper();
console.log(points);
// [ 1, 2, 5, 10, 25, 40, 100 ]

/////////////////////////////////////////

// 객체를 요소로 갖는 배열을 정렬하는 sort 를 사용하는 것은 아래 예제로 보자.

const todos = [ 
    {id: 4, content: 'Javascript'}, // <- a
    {id: 1, content: 'HTML'},   // <- b
    {id: 2, content: 'CSS'}     
];


// function compare(key) {
//     return function (a, b) {
//         return (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0))
//     }
// }
// 원래는 아래 코드같은 화살표 표현식으로 나타낼수 있는데, 내가 헷갈려서 함수 표현식으로 위 코드처럼 나타냈다.

function compare(key) {
    return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
}

// (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0)) 이걸 풀어서 독해해보면 아래와 같다.
// a라는 요소의 프로퍼티(key)랑 b라는 요소의 프로퍼티(key)랑 비교해보는데, a 요소의 프로퍼티가 b 요소의 프로퍼티보다 큰게 맞으면(true면) 1 이고,
// 아니면(false 면) a[key] < b[key] ? -1 : 0 이 값을 반환하는데, (a[key] < b[key] ? -1 : 0) 이건 또 뭔 뜻이냐면, false이긴 한데, 
// 그렇다면 a요소의 프로퍼티가 b 요소의 프로퍼티보다 작은게 맞으면(true 면) -1 이고, 그것도 아니면(false 면) 0 인것이다.

// 즉, a 와 b 를 비교해서 양수(+) 가 나오면 앞의 인수가 큰거고, 음수(-)가 나오면 뒤 인수가 큰거고, 0 이 나오면 앞의 인수와 뒤 인수가 같은것이다. 
// 이것을 보고 sort 를 쓰면 오름차순의 순서가 계산된다. 

todos.sort(compare('id')); // todos 라는 배열의 요소들 중에 id라는 프로퍼티를 기준으로 오름차순으로 정렬해라.
console.log(todos);
// [ { id: 1, content: 'HTML' }, { id: 2, content: 'CSS' }, { id: 4, content: 'Javascript' } ]

todos.sort(compare('content'));
console.log(todos);
// [ { id: 2, content: 'CSS' }, { id: 1, content: 'HTML' }, { id: 4, content: 'Javascript' } ]

const superheros = [
    'Iron_man',
    'Captain_america',
    'Thor',
    'Doctor_strange'
]

// function print(hero) {
//     console.log(hero);
// }

// superheros.forEach(print);

// Iron_man Captain_america Thor Doctor_strange

// 위 코드는 forEach문 위에 print 함수를 선언한것이다. 
// 위 코드보다 더 깔끔하게 만드려면 아래 코드처럼 하면 된다.
// 파라미터를 넣을때 바로 선언할수 있다.(아래 코드처럼)

superheros.forEach(function (hero) {
    console.log(hero);
}); // 함수 이름이 없는 함수를 forEach 문 안에 만들면 된다. 
// Iron_man Captain_america Thor Doctor_strange
// 원래 코딩했던 코드보다 깔끔하게 만든 코드가 위 코드인데, 이것보다 더 깔끔하게 만들수 있다. 아래 코드처럼.

superheros.forEach(hero => {
    console.log(hero);
});

// 배열 안에 있는 요소들을 가지고 어떤 작업을 일괄적으로 하려면 forEach문을 사용하면 된다. 
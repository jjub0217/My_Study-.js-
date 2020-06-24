const superheros = [
    'Iron_man',
    'Captain_america',
    'Thor',
    'Doctor_strange'
]

function print(hero) {
    console.log(hero);
}

superheros.forEach(print);

// Iron_man Captain_america Thor Doctor_strange

// 위 코드는 forEach문 위에 print 함수를 선언한것이다. 
// 위 코드보다 더 깔끔하게 만드려면 아래 코드처럼 하면 된다.
// 파라미터를 넣을때 바로 선언할수 있다.(아래 코드처럼)

superheros.forEach(function (hero) {
    console.log(hero);
}); 
// 함수 이름이 없는 함수를 forEach 문 안에 만들면 된다. 
// 매개변수에는 배열의 각각의 요소를 의미하는 단어를 넣으면 된다.

// Iron_man Captain_america Thor Doctor_strange

// 원래 코딩했던 코드보다 깔끔하게 만든 코드가 위 코드인데, 이것보다 더 깔끔하게 만들수 있다. 아래 코드처럼.

superheros.forEach(hero => {
    console.log(hero);
});
// 매개변수 hero를 사용하여 화살표 함수를 만든 코드이다. 
// forEach의 조건식 안에 쓰이는 매개변수는 배열의 요소를 의미하는 새로운 단어를 넣어야 하고, 코드블럭 안에는 
// 해당 새로운 단어를 사용하여 코딩해야 한다.

// 배열 안에 있는 요소들을 가지고 어떤 작업을 일괄적으로 하려면 forEach문을 사용하면 된다. 
let i = 0;
while(i < 10) {
    document.write('반복 조건이 true이면 반복합니다<br>');
    // 일단 view 에 찍고
    i += 1; // i 를 1 증가시킨다. 
// 그래서 view에 찍는걸 10번까지(0부터 시작했으니까) 반복한다.
}




let number = 0;

while(number < 10) {
    // console.log(i);
    // i++;
    if(number % 2 === 0){
        console.log(number);
    }
    number++;
}
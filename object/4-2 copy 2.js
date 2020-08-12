
const dog = {
    name: '멍멍이',
    sound: '멍멍',
    say: function said(){
        console.log(this.sound); // 멍멍
    }
}

const cat = {
    name: '야옹이',
    sound: '야옹~'
}


console.log(dog.say); // [function: said]
cat.say = dog.say; // <- 프로퍼티 키 동적생성
// cat.say = ( [function: said] = this.sound =
// = 여기서 this는 해당 cat 이란 객체이고, cat 이란 객체에서 sound 라는 프로퍼티 키의 값이 불러와진다 )

cat.say(); // 야옹~



const catSay = cat.say; // cat.say = [function: said] 
console.log(catSay); // [function: said]
catSay(); // undefined <- 이유는: catSay 는 변수일뿐. said 안에서 쓰이는 this는 누구를 가리키는건지 모르게 된다. 
         // 그래서 undefined 가 나오게 되는 것이다.  




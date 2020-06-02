// 배열에서 특정 요소만, 내가 필터링 하려는 조건으로 추출해서 새로운 배열을 만들고 싶을 때 사용한다. 
// 또한, 배열의 특정요소만 제거하기 위해서도 사용된다.
// 필터 메소드를 통해서, 새로운 배열을 반환한다. 반환한 것은 배열이므로, 배열의 크기(length)가 반드시 있다.
// 원본 배열은 수정하지 못한다.

const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter(number => number % 2); 
// numbers 라는 배열에서 걸러내서 버릴거야. (= 필터링해서 홀수만 남길거야) 뭐를 걸러낼거냐면 numbers 의 요소의 값을 일단 불러오고,
// 그 요소의 값이 2 로 나누면 나머지가 0 인 짝수만 걸러내서 버릴거야.(= 필터링 해서 홀수만 남길거야)
console.log(odds); // 짝수만 걸러내고 남은게 뭐냐?(필터링해서 남은 홀수가 뭐냐?)
// [ 1, 3, 5 ]

////////////////////////////////////////

// complete 값이 false 인것만 필터링 하려면?

const todos = [
    {id: 1, content:'HTML', completed: true},
    {id: 2, content:'CSS', completed: true},
    {id: 3, content:'Javascript', completed: true},
    {id: 4, content:'React', completed: false}
];

const tasksNotDone = todos.filter(todo => todo.id !== 2);  
// todos라는 배열을 걸러낼거야. 뭐를 걸러낼거냐면 todos 의 요소의 값을 일단 불러오고, 
// 그 값의 프로퍼티가 id가 2 가 아닌것만 걸러낼거야 

console.log(tasksNotDone);
// [{ id: 1, content: 'HTML', completed: true },  { id: 3, content: 'Javascript', completed: true }, { id: 4, content: 'React', completed: false }]

//////////////////////////////////////////


class Users {
    constructor() {
      this.users = [
        { id: 1, name: 'Lee' },
        { id: 2, name: 'Kim' }
      ];
    }
  
    // 요소 추출
    findById(id) {
      // id가 일치하는 사용자만 반환
      return this.users.filter(user => user.id === id);
    }
  
    // 요소 제거
    remove(id) {
      // id가 일치하지 않는 사용자를 모두 반환
      this.users = this.users.filter(user => user.id !== id);
    }
  }
  
  const users = new Users(); // users 라는 변수에, 생성자 함수를 써서 Users 라는 새로운 배열을 만들어서, 그걸 할당해라.
  
  let user = users.findById(1); // user 라는 변수에, users 라는 배열(즉, Users 라는 새로운 배열)에서 findById 라는 함수에서 1 을 매개변수에 할당하는 함수를 대입해라.
  console.log(user); // findById 함수를 대입한 user는 뭐냐? 
  // [{ id: 1, name: 'Lee' }]
  
  users.remove(1);   // users라는 배열(즉, Users 라는 새로운 배열)에서 remove 라는 함수에서 1을 매개변수에 할당하는 함수의 리턴값을 반환해라.
  
  user = users.findById(1); 
  // 현재 user라는 배열은 [ {id: 2, name: 'Kim'}] 이라서 findById 함수에서 1을 매개변수로 할당해도 필터를 통과하지 못했기 때문에 
 // 빈 배열을 반환하게 되고, 그 빈 배열이 user 라는 변수에 할당하게 된다.  
  console.log(user); 
  // []

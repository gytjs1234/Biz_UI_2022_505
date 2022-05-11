//선언과 동시에 값지정,선언과 동시에 초기화
const num1 = 10;
//num1=30: const  로 선언한 변수에는 다시 값을 저장할수 없다

//선언과 동시에 값 지정 또는 선언 후 값 지정
//선언과 초기화 동시에 하지 않아도 됨

let num2;
num2 = 100; //이후에 값을 저장 변경 할수잆음
num2 = 200;

//함수 선언 자바스크립트는 단독으로 선언가능
//매개변수로 num1 을 갖는 func1이라는 이름의 함수 선언
//함수의 코드를 실행하려면 이후에 호출해 주어야한다
function fun1(num1) {
  console.log(num1);
} //오래된 코드이다 현재 많이안씀
fun1(100);

//두개의 아규먼트(매개변수)를 갖는 add함수 선언
//이 함수는 두개의 아규먼트 값을 덧셈하여 return한다.
//public void method() 리턴문이 없음
//public int method()리턴문이 있음
function add(num1, num2) {
  return num1 + num2;
}

const result1 = add(100, 200);
console.log(result1);

const str = add("Korea   ", "대한");
console.log(str);

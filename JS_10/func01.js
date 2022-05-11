const num1 = 100;
const num2 = 200;
const num3 = 300;
const sum = num1 + num2 + num3;
console.log("결과:", sum);

//자바스크립트함수
function add(num1, num2) {
  console.log("add 함수결과:", num1 + num2);
}

add(100, 200);

function view(res) {
  console.log(res.text);
}
//data객체를 선언하고 text와 html 필드 변수를 추가하고 text에 korea html 에 <p>Korea</p>문자열을ㅇ 저장하라
const data = { text: "Korea", html: "<p>korea</p>" };
view(data);

//js에서는 객체에 변수를 추가할때 별도로 클래스등을 선언할 필요가 없다
//vo1객체에 변수추가(추가하면서 초기화를 같이한다)
const vo1 = {};
vo1.text = "gytjs";
vo1.name = "효선이";
vo1.gytjs = "gytjs";
console.log(vo1);

function my(make) {
  console.log(make);
  console.log(make.text);
  console.log(make.name);
}

my(vo1);

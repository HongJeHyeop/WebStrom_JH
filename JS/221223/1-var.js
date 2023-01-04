//주석
//변수 생성 방법
//1. var 키워드 사용 - 변수 자체를 재정의 가능 (비추천)
var first = 'this is test'
console.log(first)
// var first = 3;
// var first = 10

// 2. let 키워드 사용 - 일반적인 변수 생성법
let second = 2
second = 20
console.log(second)
// let second = 10
// 3. const 키워드 사용 - 상수(final)
const third = 2;

// let s = 'This \t is test\n message';
let s = parseInt('123');
console.log(typeof s)


let number = 1234.567;
console.log(number.toString());
console.log(number.toFixed(1));

const 객체 = {'a': 2, b: true};
console.log(객체.a); // 프로퍼티 이름으로만 사용
console.log(객체.b);
console.log(객체["a"]); // 리터럴(문자) 형식으로만 사용
console.log(객체["b"]);
console.log(객체.c); // undefined -> 객체에 없는 key값(프로퍼티값)을 읽을때
객체.a = 'test'; // 객체에 존재하던 a(key)에 해당하는 value(값)을 변경하기
console.log(객체.a)
객체.c = 'new value'; // 객체에 존재하지 않았던 새로운 키: 값 쌍을 추가
console.log(객체.c);
console.log('b' in 객체); //객체에 b라는 property(key)가 존재하는지 true / false로 반환
delete 객체.c; // 객체에 존재하는 property(key)값을 제거한다
console.log('c' in 객체); //객체에 c라는 property(key)가 존재하는지 true / false로 반환

// foreach
/*
for(변수 in 객체) {
    console.log("키: " + 변수)
}
for(변수 of 객체){
    console.log("값: " + 변수);
}
*/

// 예외처리
try { //블록 안에 있는 코드를 실행한다
    console.log('asdf')
    throw Error(); //사용자가 임의로 예외를 발생시킴
} catch (Error) { //try구문 안에서 오류 났을때 자동으로 이 블록으로 이동함
    console.log("예외발생")
} finally { //예외가 발생하든 안하든 무조건 실행되는 부분
    console.log("무조건 실행됨")
}

function func() {
    console.log("함수가 실행됨");
    const a = 23;
    console.log(a)
}

func() //함수가 실행됨
console.log('한번 더 ');
func();//다시 함수 호출


//a와 b 매개변수가 존재하는 test 이름의 함수
function test(a, b, ...c) { // [파라미터, 매개변수]a, b 다음에 오는 모든것을 c로 받아옴
    console.log("a는 " + a);
    console.log("b는 " + b);
    console.log("c는 " + c);
    return '데이터';
}

// test함수를 호출
test(5, 41, 1, 1, 1, 1, 1); //인수, 인자
let w = test(1, 10)
console.log("결과: ", w);

// 전역변수. 함수에 직접 전달하지 않아도 함수 내부에서 사용 가능
let obj = {a: 1, b: 2, c: 3}
get_obj(obj);

function get_obj() {
    console.log(obj.a)
    console.log(obj.b)
    console.log(obj.c)
}

// 익명함수, 변수에 함수를 넣어 사용
let f = function () {
    console.log("f함수가 실행되었습니다.")
    let num = 100; // 지역변수. 함수 내부에서만 사용 가능
    number = 10000; // 전역변수. 함수 외부에서도 사용가능하게 된다
}
f();
console.log(number)
/*
f();
let z = f;
z();*/

let f2 = {
    name: '홍제협',
    work: function () {
        console.log("일하자");
        return 1;
    }
}
f2.work();
console.log(f2.work());

function Person(num1, num2) {
    this.a = num1;
    this.b = num2;
    console.log("adsfadsf");
}
let  person = new Person();
person = new Person();

(function f3(){
    console.log('실행')
})();

function f4(a){
    console.log("f4")
    console.log(a)
}
let f5 = (a) => {
    console.log("f5")
    console.log(a)
}
f4(1, 2);
f5(1, 2);0
// let f5 = a => console.log("f5");
// let f5 = a => 10
// let f5 = a => ({a: 1, b: 2}); 객체 리터럴일경우 소괄호로 묶음

function t(){
    function t2(){
        console.log("t2");
    }
    return t2;
}
t()();

date = new Date();
console.log("날짜/시간", date)
console.log("현재 지역시: ", date.toLocaleString())
//0: 일요일, 1:월요일..... 5:금, 6:토
console.log("요일: ", date.getDay());
console.log("월: ", date.getMonth());
console.log("일: ", date.getDate());
console.log("년: ", date.getFullYear());
console.log("시간: ", date.getTime()); // 1970년 1월 1일 기준
console.log("시: ", date.getHours());
console.log("분: ", date.getMinutes());
console.log("초: ", date.getSeconds());
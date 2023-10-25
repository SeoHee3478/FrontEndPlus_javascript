// 함수의 매개변수에 적용
function fn(a, b, ...args) {
  console.log(a, b, args);
}

fn();
fn(1);
fn(2, 3);
fn(4, 5, 6);
fn(7, 8, 9, 10, 11);

// 구조 분해 할당에서 사용
var [first, second, ...rest] = [100, 200, 300, 400, 500];
console.log(first, second, rest);

var user = {
  name: "김철수",
  age: 30,
  phone: "01022223333",
  address: "서울 특별시 종로구 종로3길 17 D타워, 16-17 (주) 멋쟁이 사자처럼",
};

var { name, age, ...etc } = user;
console.log(name, age, etc);

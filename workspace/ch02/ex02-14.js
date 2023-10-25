var name = "global";
function returnName() {
  return this.name;
}

// 일반적인 함수로 호출(함수명())
console.log(returnName()); //window 객체

// 객체의 메소드로 호출(객체.메소드명())
var kim = new Object();
kim.name = "김철수";
kimage = 30;
kim.getName = returnName;

var lee = {
  name: "이영희",
  age: 40,
  getName: returnName,
};

console.log(kim.age, kim.getName().call(window));
console.log(lee.age, lee.getName().apply(kim));
console.log(returnName(), returnName().call(lee)); // call 이나 apply의 우선순위가 더 높음 

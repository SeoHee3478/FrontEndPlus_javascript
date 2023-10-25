// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

// 지정한 객체의 모든 속성을 출력한다.
function printObj(obj) {
  for (var prop in obj) {
    console.log(prop, obj[prop]);
  }
}

var arr = ["zero", "one", "two"];
arr.push("three");
arr.push("four");
arr.pop();
arr.shift();

// 일반 객체처럼 속성 추가
arr.name = "kim";

// 대입연산자로 속성 추가. enumerable, writable, configurable true로 설정됨
arr["age"] = 30;

// 속성 추가 전용 메소드
Object.defineProperty(arr, "age", {
  value: 30,
  enumerable: true, // 열거 가능한지 여부(for-in, Object.keys(), Object.values() ...에 노출할지 여부)
  writable: true, // 수정이 가능한지 여부(상수형 변수, const)
  configurable: true,
});
// arr["age"] = 30; 코드와 같음

printObj(arr);

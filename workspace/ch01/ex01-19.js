// 지정한 두 값의 최대값을 반환한다.
function max(n1, n2) {
  // var maxNum;
  if (n1 > n2) {
    var maxNum = n1;
  } else {
    var maxNum = n2;
  }
  return maxNum;
  // js에서 Var는 함수 어디에서든지 선언하면 함수 내부에서는 모두 사용할 수 있음
}

console.log(max(10, 20)); // 20
console.log(max(200, 30)); // 200

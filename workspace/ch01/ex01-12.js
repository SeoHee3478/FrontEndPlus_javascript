// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

var colorArr = ["orange", "yellow", "green"];
colorArr.push("black");
colorArr.push("white");
console.log(colorArr.shift());
console.log(colorArr.pop());
printArr(colorArr);

console.log("---");
// 유사배열객체
//  - 0부터 시작해서 1씩 증가하는 속성 추가
var arr2 = {
  0: "orange",
  1: "yellow",
  2: "green",
  length: 3,
  push: function (elem) {
    //맨 뒤에 지정한 elem을 추가한다.
    // Length를 1 증가시킨다
    // this[this.length] = elem;
    // this.length++;

    // var tmpArr = [];
    // tmpArr.push.call(this, elem);

    // TODO: protoype 단원, 배열의 모든 메소드는 Array.prototype에 있다
    Array.prototype.push(elem);
  },
  shift: function () {
    //첫번째 요소를 삭제하고 반환한다.
    //length를 1 감소시킨다.
    var first = arr2[0];
    for (var i = 0; i < arr2.length - 1; i++) {
      this[i] = arr2[i + 1];
    }
    this.length--;
    delete this[this.length];
    return first;
  },
  pop: function () {
    // 마지막 요소를 삭제하고 반환한다.
    // length를 1 감소시킨다.
    // var last = this[this.length - 1];
    // this.length--;
    // delete this[this.length];
    // return last;

    return Array.prototype.pop.call(this);
  },
};

arr2.push("black");
arr2.push("white");
console.log(arr2.shift());
console.log(arr2.pop());

printArr(arr2);

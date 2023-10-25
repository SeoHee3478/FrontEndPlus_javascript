// ex02-15.js 복사
var count = 0;
var counter = {
  count: 0,
  visit: function () {
    // 방문자를 한명 증가시킨다.
    this.count++; // this = counter
    var visit2 = () => {
      this.count++; // 화살표 함수 내부에는 THIs사용 x, 자기 없으면 가장 가까운 위에서 찾음, this = counter
    };
    visit2.call(this);
  },
};

counter.visit();
counter.visit();
console.log("합계", counter.count);

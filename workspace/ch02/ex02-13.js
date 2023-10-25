function fn(n1, n2) {
  console.log(n1, n2);
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log("합계", sum);
}

fn();
fn(10);
fn(20, 30);
fn(40, 50, 60);
fn(234, 45, 5, 6, 12, 3, 4, 4, 6, 3, 444, 4, 3, 2, 1);

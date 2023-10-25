var stack = [];
// 100, 200, 300 저장
stack.push(100);
stack.push(200);
stack.push(300);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

// 300
// 200
// 100

var queue = [];
// 100, 200, 300 저장
stack.push(100);
stack.push(200);
stack.push(300);

console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
// 100
// 200
// 300

console.log(stack, queue);

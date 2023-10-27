var todolist = [
  {
    _id: 1,
    title: "Javascript 공부",
    done: true,
  },
  {
    _id: 2,
    title: "Typescript 공부",
    done: false,
  },
  {
    _id: 3,
    title: "React 공부",
    done: false,
  },
  {
    _id: 4,
    title: "React 프로젝트",
    done: true,
  },
];

// sort() _id로 내림차순 정렬
todolist.sort(function compare(a, b) {
  return b._id - a._id;
});
console.log("정렬 결과", todolist);

// forEach() 완료된 할일 목록
var doneList = [];
todolist.forEach(function (element) {
  if (element.done === true) {
    doneList.push(element);
  }
});
todolist.forEach((todo) => (todo.done ? doneList.push(todo) : 0));
console.log("forEach() 완료된 할일 목록", doneList);

// filter() 완료된 할일 목록
var doneList = todolist.filter(function (element) {
  return element.done === true;
});
console.log("filter() 완료된 할일 목록", doneList);

// map() 남은 할일 목록 // 다시
var reaminList = todolist
  .map(function (element) {
    if (element.done === false) return element;
    return null;
  })
  .filter((element) => element != null);
console.log("map() 남은 할일 목록", reaminList);

// reduce() 남은 할일 수
// var reaminCount = todolist.reduce(function (acc, cur) {
//   if (cur.done === false) acc.push(cur);
//   return acc;
// }, []);
var reaminCount = todolist.reduce((acc, todo) => acc + (todo.done ? 0 : 1), 0);
console.log("reduce() 남은 할일 수", reaminCount);

// find() _id=2인 할일
var todo = todolist.find(function (element) {
  return element._id === 2;
});
console.log("find() _id=2인 할일", todo);

// find() _id=3인 할일의 index // 다시
var todoIndex = todolist.find(function (element) {
  return element._id === 3;
});
console.log("find() _id=3인 할일의 index", todolist.indexOf(todoIndex));

// some() 남은 할일이 하나라도 있는가?
var hasTodo = todolist.some(function (element) {
  return element.done === false;
});
console.log("some() 남은 할일이 하나라도 있는가?", hasTodo);

// every() 할일이 모두 완료 되었는가?
var busy = todolist.every(function (element) {
  return element.done === true;
});
console.log("every() 할일이 모두 완료 되었는가?", busy);

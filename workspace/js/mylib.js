// 최소값 구하는 함수
Array.prototype.min = function () {
  return Math.min(...this);
};

// 모든함수에 memoization 추가
Function.prototype.memo = function (key) {
  // 캐시를 위한 코드
  this._cache = this._cache || {};
  if (this._cache[key] !== undefined) {
    return this._cache[key];
  } else {
    return (this._cache[key] = isPrime(key));
  }
};

// 모든 함수에 memoization 기능 추가
// isPrime(3) -> 캐시 x
// isPrime = isPrime.memoize();
// isPrime(1000000008); -> 캐시 o
Function.prototype.memoize = function () {
  var fn = this; // isPrime
  return function () {
    return fn.memo.apply(fn, arguments); //isPrime
  };
};

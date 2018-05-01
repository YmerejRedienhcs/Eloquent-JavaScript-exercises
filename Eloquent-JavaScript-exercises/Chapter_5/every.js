function every_loop(array, test) {
  ret = true;
  for (let value of array) {
    ret = ret && test(value);
    if (!ret) break;
  }
  return ret;
}

function every_some(array, test) {
  function revTest(val) {
    return !test(val);
  }
  return !array.some(revTest);
}

console.log(every_loop([1, 3, 5], n => n < 10));
// → true
console.log(every_loop([2, 4, 16], n => n < 10));
// → false
console.log(every_loop([], n => n < 10));
// → true
console.log(every_some([1, 3, 5], n => n < 10));
// → true
console.log(every_some([2, 4, 16], n => n < 10));
// → false
console.log(every_some([], n => n < 10));
// → true

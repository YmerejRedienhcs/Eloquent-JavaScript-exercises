// Your code here.
function loop(value, testF, updateF, bodyF) {
  while (testF(value)) {
    bodyF(value);
    value = updateF(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

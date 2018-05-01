let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(`arrays is: >>${JSON.stringify(arrays, 4, null)}`);
function flatten(arr) {
  return arr.reduce((c,e) => c.concat(e))
}
ret = flatten(arrays);
console.log(`ret is: >>${JSON.stringify(ret, 4, null)}`);
// → [1, 2, 3, 4, 5, 6]

function isEven(n) {
  if (n<0) { n = -n }
  if (n===0)
    return true;
  if (n===1)
    return false;
  return (isEven(n-2));
}

function test(n){
  console.log(`${n} is ${isEven(n) ? 'even' : 'odd'}.`);
}

for (var i = -5; i < 6; i++) {
  test(i);
}

test(10000);

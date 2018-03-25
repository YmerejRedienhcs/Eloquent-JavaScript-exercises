function countChar (str, chr) {
  nchar = 0;
  slen = str.length;
  for (var i = 0; i < slen; i++)
    if (str.charAt(i) === chr)
      nchar++;
  return nchar;
}

function test(str, chr) {
  console.log (`countChar(\"${str}\", \"${chr}\") is: ${countChar(str, chr)}`);
}

test("abc", "b");
test("Abigail van Buren is a great woman", 'g');
test("Abigail van Buren is a great woman", 'B');
test("Abigail van Buren is a great woman", 'n');
test("Abigail van Buren is a great woman", 'A');

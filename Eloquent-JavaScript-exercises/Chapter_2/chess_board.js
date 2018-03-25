size = 16;
for (i=0; i < size; i++) {
  outStr = "";
  for (j=0; j < size; j++)
    outStr += (i+j)%2===0 ? '#' : ' ';
  console.log (outStr);
}

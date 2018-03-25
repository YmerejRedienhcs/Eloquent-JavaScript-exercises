for (i=1; i <= 100; i++) {
  outputString = i.toString();
  multipleOfThree = (i%3 === 0);
  multipleOfFive = (i%5 === 0);
  multipleOfThreeAndFive = (multipleOfThree && multipleOfFive);
  switch (true) {
    case multipleOfThreeAndFive:
      outputString = "Fizzbuzz";
      break;
    case multipleOfThree:
      outputString = "Fizz";
      break;
    case multipleOfFive:
      outputString = "Buzz";
      break;
  }
  console.log(outputString);
}

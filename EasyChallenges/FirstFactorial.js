function FirstFactorial(num) {
  var newNum = 1;
  for(var i = num; i > 0; i--){
    newNum *= i;
  }
  return newNum;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());

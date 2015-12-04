function MultiplicativePersistence(num) {
  var counter = 0, sum = 1, numArray;
  numArray = num.toString().split("");
  while(numArray.length > 1){
    for(var i = 0; i<numArray.length; i++){
      sum *= parseInt(numArray[i]);
    }
    numArray = sum.toString().split("");
    sum = 1;
    counter++;
  }
  return counter;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
MultiplicativePersistence(39);

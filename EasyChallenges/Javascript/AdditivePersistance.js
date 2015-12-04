function AdditivePersistence(num) {
  var counter = 0, numArray = num.toString().split(""), sum = 0;
  while(numArray.length > 1){
    for(var i = 0; i < numArray.length; i++){
      sum += Number(numArray[i]);
    }
    numArray = sum.toString().split("");
    sum = 0;
    counter++;
  }
  return counter;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
AdditivePersistence(2718);

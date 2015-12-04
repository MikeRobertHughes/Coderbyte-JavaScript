function ArithGeo(arr) {
  var answer = "";
  var i = 0;
  while(i < arr.length - 2){
    if((arr[i] - arr[i + 1]) === (arr[i+1] - arr[i + 2])){
      answer = "Arithmetic";
    } else if((arr[i]/arr[i+1])===(arr[i+1]/arr[i+2])){
      answer = "Geometric";
    } else {
      answer = -1;
      break;
    }
    i++;
  }
  return answer;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ArithGeo([1,3,5,7]);
ArithGeo([1,3,9,27]);

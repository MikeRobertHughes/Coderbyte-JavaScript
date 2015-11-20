function SecondGreatLow(arr) {
  var arr = arr.sort(function(a,b){return a - b;});
  var secondGreat = arr[arr.length - 2];
  var secondLow = arr[1], i = 0;
  while(arr[i] === arr[i+1]){
    secondLow = arr[i+2];
    i++;
  }
  return secondLow + " " + secondGreat;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow([7,7,98,106]);
SecondGreatLow([1,2]);

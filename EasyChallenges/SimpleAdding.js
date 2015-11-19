function SimpleAdding(num) {
  var start = 0;
  for(var i = start; i <= num; i++){
    start += i;
  }
  return start;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(readline());

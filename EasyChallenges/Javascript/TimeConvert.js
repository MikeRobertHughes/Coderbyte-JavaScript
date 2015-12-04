function TimeConvert(num) {
  var hours = Math.floor(num / 60), min = num % 60;
  return hours + ":" + min;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());

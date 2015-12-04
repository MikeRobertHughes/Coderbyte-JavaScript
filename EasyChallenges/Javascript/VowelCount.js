function VowelCount(str) {
  var regex = /[aeiou]/;
  str = str.toLowerCase();
  var j = 0;
  for(var i = 0; i<str.length;i++){
    if(regex.test(str[i])){
      j++;
    }
  }
  return j;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());

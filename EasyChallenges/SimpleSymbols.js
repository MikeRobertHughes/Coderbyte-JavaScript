function SimpleSymbols(str) {
  var value = "", regex = /[A-Za-z]/;
  for(var i = 0; i < str.length; i++){
    if(regex.test(str[i])){
      if(str[i - 1] !== '+' || str[i + 1] !== '+'){
        return false;
      }
    }
  }
  return true;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());

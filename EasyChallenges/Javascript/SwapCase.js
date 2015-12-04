function SwapCase(str) {
  var newStr = "";
  for(var i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase()){
      newStr += str[i].toLowerCase();
    } else if(str[i] === str[i].toLowerCase()){
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SwapCase("Hello World");

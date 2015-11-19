function ABCheck(str) {
  str = str.toLowerCase();
  var answer = "";
  for(var i = 0; i < str.length; i++){
    if(str[i] === 'a' && str[i+4] === 'b'){
      answer = "true";
      break;
    } else {
      answer = "false";
    }
  }
  return answer;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());

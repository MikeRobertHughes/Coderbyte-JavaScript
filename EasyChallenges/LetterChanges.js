function LetterChanges(str) {
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var newAlpha = "bcdEfghIjklmnOpqrstUvwxyzA";
  var index = 0, newStr = "";
  var regex = /[^A-Za-z]/;
  for(var i = 0; i < str.length; i++){
    if(regex.test(str[i])){
      newStr += str[i];
    } else {
      index = alpha.indexOf(str[i])
      newStr += newAlpha.charAt(index);
    }
  }
  return newStr;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());

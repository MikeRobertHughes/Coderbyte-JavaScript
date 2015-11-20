function NumberAddition(str) {
  var regex = /[^0-9]/;
  var newStr = "";
  for(var i = 0; i <str.length;i++){
    if(regex.test(str[i])){
      newStr += " ";
    } else {
      newStr += str[i];
    }
  }
  newStr = newStr.split(" ");
  var sum = 0;
  for(var i = 0; i <newStr.length;i++){
    if(newStr[i] !== ""){
      sum += parseInt(newStr[i]);
    }
  }
  return sum;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
NumberAddition("88Hello Wo3rld!");

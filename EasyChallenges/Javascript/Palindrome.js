function Palindrome(str) {
  str = str.split(" ").join("").toLowerCase();
  var isEeven, palindrome;
  if(str.length % 2 === 0){
    isEven = true;
  } else {
    isEven = false;
  }

  if(isEven){
    for(var i = 0; i <str.length/2 - 1; i++){
      if(str[i] === str[str.length - 1 - i]){
        palindrome = "true";
      } else if(str[i] !== str[str.length - 1 - i]){
        palindrome = "false";
        break;
      }
    }
  }
  if(!isEven){
    for(var j = 0; j < str.length/2; j++){
      if(str[j] === str[str.length - 1 - j]){
        palindrome = "true";
      } else {
        palindrome = "false";
        break;
      }
    }
  }
  return palindrome;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
Palindrome("Ab bA");
Palindrome("Hello World");

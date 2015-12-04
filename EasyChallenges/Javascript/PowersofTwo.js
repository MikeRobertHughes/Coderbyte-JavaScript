function PowersofTwo(num) {
  while(num > 2){
    num /= 2;
  }
  if(num === 2){
    return "true";
  }
  return "false";
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
PowersofTwo(22);
PowersofTwo(16);

function ExOh(str) {
  var counterX = 0, counterO = 0;
  str = str.toLowerCase();
  for(var i = 0; i < str.length; i++){
    if(str[i] === 'x'){
      counterX++;
    } else if(str[i] === 'o'){
      counterO++;
    }
  }
  return counterO === counterX;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ExOh("xxxooxoo");
ExOh("xxxooxo");

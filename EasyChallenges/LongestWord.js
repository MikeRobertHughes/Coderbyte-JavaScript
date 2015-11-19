function LongestWord(sen) {
  var newSen = "", words = [], maxLength = 0, maxWord = "", regex = /[A-Za-z]/, j = 0;
  for(var i = 0; i < sen.length; i++){
    if(regex.test(sen[i]) || sen[i] === " "){
      newSen += sen[i];
    }
  }
  words = newSen.split(" ");
  while( j < words.length){
    if(words[j].length > maxLength){
	  maxLength = words[j].length;
      maxWord = words[j];
    }
    j++;
  }
  return maxWord;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());

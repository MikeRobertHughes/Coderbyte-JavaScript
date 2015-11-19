function LetterCapitalize(str) {
  var words = str.split(" ");
  var newWords = [];
  for(var i = 0; i < words.length; i++){
    newWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1, words[i].length));
  }
  return newWords.join(" ");
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());

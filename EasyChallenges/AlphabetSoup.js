function AlphabetSoup(str) {
  str = str.split(" ").join("").split("").sort().join("");
  return str;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup("hello");

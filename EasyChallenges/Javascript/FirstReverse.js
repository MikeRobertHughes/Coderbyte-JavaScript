function FirstReverse(str) {
	var new_str = "";
  	for (i = str.length-1 ; i >= 0 ; i--) {
    	new_str += str[i];
	}
  return new_str;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
FirstReverse("Hello");
FirstReverse("This is a sentence.");

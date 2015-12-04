function DashInsert(str) {
  var numbers = str.toString().split(""), newArray = [];
  for(var i = 0; i<numbers.length;i++){
    if(numbers[i] % 2 !== 0 && numbers[i+1] % 2 === 1){
      newArray.push(numbers[i]);
      newArray.push("-");
    } else {
      newArray.push(numbers[i]);
    }
  }
  return newArray.join("");

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
DashInsert("454793");

function DivisionStringified(num1,num2) {
  var num = Math.round(num1/num2).toString();
  var newNum = "";
  for(var i = 0; i<num.length;i++){
    if((num.length - 1 - i - 3) % 3 === 0){
      newNum += num[i];
      newNum += ",";
    } else {
      newNum += num[i];
    }
  }
  if(newNum[newNum.length - 1] === ","){
      newNum = newNum.substring(0,newNum.length - 1);
    }
  return newNum;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(123456789,10000);

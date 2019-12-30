// convert n into a string
// use parseInt to convert string into a number
// recursion call (a function calling itself) use recursion instead of a for loop
//if("5"==5)//true
//if("5"===5)//false
//829232
// digit =["8","2",..]
var i = 0
var number = 0
function digital_root(n) {
  var digit = n.toString().split("");
  number += parseInt(digit[i++])

  var result = number;

  if (i  >= digit.length && result.toString().length === 1) {
    
      return result; //exits
  }

  if (i===digit.length ){  
      i = 0;
      number = 0;
       n=result;

  }

    
  

 
  var answer = digital_root(n);//calls when you reached the end of the string one time, after call digit_root(result)
i = 0;
number = 0;
  return answer
}


console.log(digital_root(456));
console.log(digital_root(942));
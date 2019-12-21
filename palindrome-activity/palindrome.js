//create a function that takes a string and checks if it is a palindrome
//palindrone =. same smpelled backwards and forwards

// input => string
//output => boolean

//create function
function isPalindrome(word) {
    //format string
    var newWord = word.toLowerCase();
  // if backwards version === original word => we've got a palindrome
   var backwardsWord = newWord.split ("").reverse().join("");
    if (backwardsWord === newWord){
      return true;
    }
    else {
      return false
    }
  } 
  console.log (isPalindrome("racecar"));
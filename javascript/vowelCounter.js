//input? => this might be an arg in my function
//output? Integer => the count of vowels in that string

//write a function

function vowelCounter(string) {
    var vowelCount = 0;
    var input = string.toLowerCase();
    //loop throught string as an array
    for (var i=0; i < input.length; i++) {
      if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u' ) {
        vowelCount++
      }
    }
    return vowelCount;
  }
  
  console.log (vowelCounter("banana"));
// Write a function that takes in a string and outputs the *first* occurrence of a 
// character that does not repeat itself in that string.

// create function
// loop through the 


//INPUT => STRING (sentence format)
//OUTPUT => STRING (single character)


function firstNonRepeatChar (string) {
    //create an objec to store our character count
    var charMap = {};
    //loop through string and check if we've seen this character before
    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        if (charMap[char]) {
            //if we've seen it, we'll increase the count for it
            charMap[char]++;
        }
        else {
            //otherwise, we can note that we've seen this character for the first time
            charMap[char] = 1;
        }
    }
    //after that for loop, we have a hashmap/object we can check for certain values
    for (var j in charMap) {
        //if we loop through each property, we can check if it has a value equal to ONE
        if (charMap[j] === 1) {
            // return that value, since it is the first occurence of a string that only occurs once
            return j;
        }
    }
 }
console.log(process.argv);

var input1 = process.argv[2]
var input2 = process.argv[3]

console.log(input1 === input2)

if (input1 % 7 === 0 && input2 % 7 ===0) {
    console.log(true);
}

else {
    console.log(false);
}


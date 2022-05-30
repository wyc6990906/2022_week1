let obfuscate = function(string) {
  var array = string.split("");
  var output = "";

  for (i = 0; i < array.length; i++) {
    if (array[i] === "a") {
      output += "4";
    } else if (array[i] === "e") {
      output += "3";
    } else if (array[i] === "o") {
      output += "0";
    } else if (array[i] === "l") {
      output += "1";
    } else {
      output += array[i];
    }
  }
  console.log(output);
};

var str = process.argv[2];
// console.log("process.argv" ,str);
obfuscate(str);

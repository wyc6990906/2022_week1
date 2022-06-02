const obfuscate = function (string) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      output += "4";
    } else if (string[i] === "e") {
      output += "3";
    } else if (string[i] === "o") {
      output += "0";
    } else if (string[i] === "l") {
      output += "1";
    } else {
      output += string[i];
    }
  }
  return output
};

const str = process.argv[2] || ' '
console.log(obfuscate(str))

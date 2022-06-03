const printInFrame = function (list) {
  list = list.split(' ');
  const longest = longestStr(list).length;
  const border = repeat('*', longest + 4); // count the top border need 4 more

  console.log(border);
  for (const word of list) {
    console.log(`* ${word}${repeat(' ', longest - word.length + 1)}*`);
  }
  console.log(border);
};

const repeat = function (str, times) {
  //wrong before is result = str
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;
};

const longestStr = function (list) {
  let longest = list[0];
  // wrong => add if statement to find the longest item
  for (const str of list) {
    if (str.length > longest.length) {
      longest = str;
    }
  }

  return longest;
};

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');

const args = process.argv;
const sum = function (num1, num2) {
  return Number(num1) + Number(num2);
};

console.log(sum(args[2], args[3]));


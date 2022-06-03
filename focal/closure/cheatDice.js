// const rollDie = function () {
//   return Math.floor(1 + Math.random() * 6);
// }

function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  let mark = 0

  return function () {
    /* your code here */
    let current = list[mark]
    mark += 1
    if (current !== undefined) {
      return current
    }
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6



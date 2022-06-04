function sum(fromN, toN) {
  // Sum all the values from fromN up to toN 0 9
  if (fromN === toN) {
    return fromN
  }
  return fromN + sum(fromN + 1, toN)
}

module.exports = sum;

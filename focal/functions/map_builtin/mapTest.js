const lighthouses = [
  "Gibraltar Point", "Peggy's Point",
  "Cove Island", "Discovery Island",
  "Cape Scott", "Point Clark", "Kincardine"
];

// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]
const mapLength = function (array) {
  return array.map(item => item.length)
}

console.log(mapLength(lighthouses))

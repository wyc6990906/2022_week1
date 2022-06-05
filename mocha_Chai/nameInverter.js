const nameInverter = function (name) {

  if (name === undefined) {
    return "Error";
  }

  const arr = name.split(' ');
  const honorifics = ['Mr.', 'Mrs.', 'Ms.', 'Dr.'];
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let honorific of honorifics) {
      if (honorific === arr[i]) {
        start = i + 1;
        break;
      }
    }
  }

  let results = [];

  for (let i = start; i < arr.length; i++) {

    if (arr[i] !== '' && !results.length) { //can make this better
      results.push(arr[i]);
    } else if (arr[i] !== '') {
      results.push(arr[i] + ',');
      results.reverse();
    }
  }
  console.log(results);

  if (start && results.length) {
    return arr[start - 1] + ' ' + results.join(' ');
  } else {
    return results.join(' ');
  }
}

console.log("kobe", nameInverter("name"))


module.exports = nameInverter;

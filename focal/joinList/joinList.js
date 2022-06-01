/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */
// const joinList = function (array) {
//   let result = ""
//   if (array.length === 0) {
//     return result = ""
//   } else {
//     array.map(item => {
//       result += item + ','
//     })
//     result = result.slice(0, result.length - 1)
//     return result
//   }
// }
// Write our function (we must define it too!) below
// ...
const joinList = function (array) {
  let newString = "";
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      newString = newString + array[i];
    } else {
      newString = newString + array[i] + ", ";
    }
  }
  return newString;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
// const conceptList = []
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

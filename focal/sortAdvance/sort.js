const students = [
  {id: 1, name: "bruce", age: 40},
  {id: 2, name: "zoidberg", age: 22},
  {id: 3, name: "alex", age: 22},
  {id: 4, name: "alex", age: 30}
];

students.sort((a, b) => {
  if (b.name === a.name) {
    return b.age - a.age
  } else if (a.name < b.name) {
    return -1
  } else {
    return 1
  }
})

console.log(students)

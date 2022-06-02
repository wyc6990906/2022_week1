const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const filterPassingGrade = function (gradeList) {
 const result =  gradeList.filter((grade) => {
    return grade >= 70
  })
  return result
}


console.log(filterPassingGrade(grades))

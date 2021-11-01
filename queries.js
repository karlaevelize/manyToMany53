const Student = require("./models").student
const Course = require("./models").course

async function getStudentsWithCourses(){
  const students = await Student.findAll({include: [Course]})
  return students.map(data => data.get({plain: true}))
}

getStudentsWithCourses().then(data => console.log(data))
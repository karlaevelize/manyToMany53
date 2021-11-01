## Steps for Many to Many

1. Generate the models of your tables 

```
npx sequelize-cli model:generate --name course --attributes subject:string,teacher:string
```

2. Generate a table with foreignKeys

```
npx sequelize-cli model:generate --name studentCourse --attributes studentId:integer,courseId:integer
```

3. Edit the migrations file to add the relation

```js
studentId: {
  type: Sequelize.INTEGER,
  references: {
    model: "students",
    key: "id"
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
},
courseId: {
  type: Sequelize.INTEGER,
  references: {
    model: "courses",
    key: "id"
  },
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
},
```

4. Edit the models to add the relation

```js
//join table
studentCourse.belongsTo(models.student)
studentCourse.belongsTo(models.course)

//other tables
student.belongsToMany(models.course, {
  through: "studentCourses",
  foreignKey: "studentId"
})

course.belongsToMany(models.student, {
  through: "courseStudents",
  foreignKey: "courseId"
})

```

5. Generate seed for the join table and add data

```
npx sequelize-cli seed:generate --name some-studentCourses
```

6. Query thhe relation

```js
async function getStudentsWithCourses(){
  const students = await Student.findAll({include: [Course]})
  return students.map(data => data.get({plain: true}))
}

getStudentsWithCourses().then(data => console.log(data))
```
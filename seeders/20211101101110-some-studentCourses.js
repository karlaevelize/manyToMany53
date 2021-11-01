'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("studentCourses",
    [
      {
        studentId: 1,
        courseId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 1,
        courseId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 2,
        courseId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 3,
        courseId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 3,
        courseId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('studentCourses', null, {});
  }
};

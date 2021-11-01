'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "courses",
      [
        {
          subject: "Math",
          teacher: "Antonia",
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          subject: "Chemistry",
          teacher: "Charles",
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          subject: "Biology",
          teacher: "Renata",
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          subject: "History",
          teacher: "George",
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          subject: "Geography",
          teacher: "Lisa",
          createdAt: new Date(),
          updatedAt: new Date ()
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('students', null, {});
  }
};


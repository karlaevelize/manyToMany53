'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "students",
      [
        {
          name: "Anna",
          email: "ana@ana.com",
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          name: "Giovanni",
          email: "giovanni@giovanni.com",
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          name: "Polina",
          email: "polina@polina.com",
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          name: "Erol",
          email: "erol@erol.com",
          createdAt: new Date(),
          updatedAt: new Date ()
        },
        {
          name: "Andre",
          email: "andre@andre.com",
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

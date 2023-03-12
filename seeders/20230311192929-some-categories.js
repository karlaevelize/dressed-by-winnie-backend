"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Hoodies",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bow Ties",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Others",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};

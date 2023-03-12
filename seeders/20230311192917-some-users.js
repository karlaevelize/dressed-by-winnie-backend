const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Anna",
          lastName: "Addams",
          email: "anna@anna.com",
          password: bcrypt.hashSync("anna", SALT_ROUNDS),
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Ben",
          lastName: "Benneth",
          email: "ben@ben.com",
          password: bcrypt.hashSync("ben", SALT_ROUNDS),
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Cassandra",
          lastName: "Clark",
          email: "cassandra@cassandra.com",
          password: bcrypt.hashSync("cassandra", SALT_ROUNDS),
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};

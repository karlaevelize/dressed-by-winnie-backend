"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Christmas Vibes",
          price: 20,
          available: true,
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1678610299/test_upload/mfwlqnafm4l6onomgyda.jpg",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Watermelon Party",
          price: 40,
          available: false,
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1678610351/test_upload/tkcj2f0jidgqkvjrivun.jpg",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pug Friends",
          price: 30,
          available: true,
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1678610439/test_upload/xrw2fnjvvrbviumuin8d.jpg",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bikes",
          price: 20,
          available: true,
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1678610496/test_upload/n0dtplblfbeuzqrucbc4.jpg",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Christmas Vibes",
          price: 20,
          available: true,
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1678610299/test_upload/mfwlqnafm4l6onomgyda.jpg",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Watermelon Party",
          price: 40,
          available: false,
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1678610351/test_upload/tkcj2f0jidgqkvjrivun.jpg",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pug Friends",
          price: 30,
          available: true,
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1678610439/test_upload/xrw2fnjvvrbviumuin8d.jpg",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bikes",
          price: 20,
          available: true,
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1678610496/test_upload/n0dtplblfbeuzqrucbc4.jpg",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};

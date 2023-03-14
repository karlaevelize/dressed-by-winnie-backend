require("dotenv").config();

module.exports = {
  development: {
    dialect: "postgres",
    url: process.env.DATABASE_URL_DEV,
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    dialect: "postgres",
  },
};

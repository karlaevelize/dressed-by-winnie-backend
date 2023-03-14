require("dotenv").config();

module.exports = {
  development: {
    dialect: "postgres",
    url: process.env.DATABASE_URL_DEV,
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
  },
};

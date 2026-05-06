require("dotenv").config()

module.exports = {
  "development": {
    "username":process.env.DB_USERNAME,
    "password":process.env.DB_PASSWORD,
    "database":process.env.DB_NAME_DEVELOPMENT,
    "host":process.env.DB_HOST,
    "port":process.env.DB_PORT || 3306, //default kalo tidak ada port di env ambil 3306
    "dialect":process.env.DB_DIALECT
  },
  "production": {
    "username":process.env.DB_USERNAME,
    "password":process.env.DB_PASSWORD,
    "database":process.env.DB_NAME_PRODUCTION,
    "host":process.env.DB_HOST,
    "port":process.env.DB_PORT || 3306, //default kalo tidak ada port di env ambil 3306
    "dialect":process.env.DB_DIALECT
  },
}
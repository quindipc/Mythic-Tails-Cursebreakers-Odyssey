require("dotenv").config();

module.exports = {
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
  nyx: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.NYX_DB_DATABASE,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds/nyx",
    },
  },
  alara: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.ALARA_DB_DATABASE,
    },
    migrations: {
      directory:  "./migrations",
    },
    seeds: {
      directory: "./seeds/alara",
    },
  },
};


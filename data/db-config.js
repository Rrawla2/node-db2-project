const knex = require("knex")
const knexfile = require("../knexfile")

const dbEnv = process.env.DB_ENV || "developement"

module.exports = knex(knexfile[dbEnv]);
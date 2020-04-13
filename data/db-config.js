const knex = require("knex")

const config = require("../knexfile.js")
// const environment = preocess.env.DB_ENV || "development"
// const db = knex(knexfile[environment])
const db = knex(config.development)

module.exports = db;
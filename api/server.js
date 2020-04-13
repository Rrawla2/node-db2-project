const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const carsRouter = require("../cars/cars-router.js")

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use("/cars", carsRouter)

module.exports = server;
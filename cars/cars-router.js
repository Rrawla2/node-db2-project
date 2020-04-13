const express = require("express")

const cars = require("./cars-model")

const router = express.Router()

router.get("/", (req, res) => {
    cars.getAll()
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not retrieve any cars" })
        })
})

router.post("/", (req, res) => {
    cars.addCar(req.body)
        .then(car => {
            res.status(201).json(car)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not add a car" })
        })
})

module.exports = router;
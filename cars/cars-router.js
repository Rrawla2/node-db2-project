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

router.put("/:id", (req, res) => {
    const { id } = req.params
    const updates = req.body
    cars.update(id, updates)
        .then(update => {
            if (updates.vin && updates.make && updates.model && updates.mileage || updates.transmission_type || updates.title) {
                res.status(200).json(updates)
            } else if (!id) {
                res.status(404).json({ message: "Id is invalid - no changes were made" })
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Id not found."})
        })   
    
})

router.delete("/:id", (req, res) => {
    const { id } = req.params
    cars.remove(id)
        .then(car => {
            if (id) {
                res.status(200).json({ message: "This record was deleted"})
            } 
        })
        .catch(err => {
            res.status(500).json({ message: "Invalid Id"})
        })
        
})

module.exports = router;
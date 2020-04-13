const db = require("../data/db-config.js")

function getAll() {
    return db("cars")
}

function addCar(car) {
    return db("cars").insert(car)
}

function remove(id) {
    return db("cars")
    .where({ id })
    .del();
}

function update(id, updates) {
  return db("cars")
    .where(id)
    .update(updates);
}

module.exports = { getAll, addCar, remove, update }

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '1HGBH41JXMN109186', make: "Ford", model: "Freestar", mileage: 140000},
        {vin: '1HGBH41JY2N109196', make: "Hyundai", model: "Santa Fe", mileage: 101000},
        {vin: '1GG9H41KLRE107128', make: "Volkswagon", model: "Passat", mileage: 250000},
      ]);
    });
};

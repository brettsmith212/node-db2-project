// STRETCH
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("cars").truncate();
  return knex("cars").insert([
    { vin: "123123", make: "toyota", model: "tacoma", mileage: 123321 },
  ]);
};

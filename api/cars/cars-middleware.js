const Cars = require("./cars-model");

const checkCarId = async (req, res, next) => {
  let { id } = req.params;
  let user = await Cars.getById(id);

  req.user = user;
  next();
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};

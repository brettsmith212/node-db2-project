const Cars = require("./cars-model");
const vinValidator = require("vin-validator");

const checkCarId = async (req, res, next) => {
  let { id } = req.params;
  let [user] = await Cars.getById(id);

  if (!user) {
    res.status(404).json({ message: "account not found" });
  }

  req.user = user;
  next();
};

const checkCarPayload = (req, res, next) => {
  let { vin, make, model, mileage } = req.body;
  if (!vin || !make || !model || !mileage) {
    res
      .status(400)
      .json({ message: "vin, make, model, and mileage are required" });
    return;
  }

  next();
};

const checkVinNumberValid = (req, res, next) => {
  let { vin } = req.body;
  if (!vinValidator.validate(vin)) {
    res.status(400).json({ message: `vin ${vin} is invalid` });
  }

  next();
};

const checkVinNumberUnique = async (req, res, next) => {
  let { vin } = req.body;
  let allCars = await Cars.getAll();
  let duplicateVin = allCars.filter((car) => car.vin === vin);
  if (duplicateVin.length > 0) {
    res.status(400).json({ message: `vin ${vin} already exits` });
  }

  next();
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};

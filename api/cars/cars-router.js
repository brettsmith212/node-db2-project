const Cars = require("./cars-model");
const router = require("express").Router();
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
} = require("./cars-middleware");

router.get("/", async (req, res) => {
  try {
    const data = await Cars.getAll();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: "error getting car" });
  }
});

router.get("/:id", checkCarId, async (req, res) => {
  try {
    let user = req.user;
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ message: "error getting car" });
  }
});

router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  async (req, res) => {
    try {
      let [postedCar] = await Cars.create(req.body);
      res.status(201).json(postedCar);
    } catch (e) {
      res.status(500).json({ message: "error adding car" });
    }
  }
);

module.exports = router;

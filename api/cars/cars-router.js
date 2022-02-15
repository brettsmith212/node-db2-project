const Cars = require("./cars-model");
const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("WORKING");
});

module.exports = router;

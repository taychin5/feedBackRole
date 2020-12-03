require("dotenv").config();
const { Router } = require("express");
const bodyParser = require("body-parser");
const router = Router();

router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
router.use(bodyParser.json());

router.post("/send-email", async (req, res) => {
  console.log("test");
  return res.json({
    success: true
  });
});

module.exports = router;

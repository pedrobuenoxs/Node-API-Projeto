const express = require("express");
const router = express.Router();
const { createValidator } = require("express-joi-validation");
const validator = createValidator({});
const {
  tshirtQuerySchema,
} = require("../../user/routes/middlewares/validator");
const controller = require("../../controllers/productControllerntroller");

router.get(
  "/tshirt",
  validator.query(tshirtQuerySchema),
  controller.getProductBySize
);

module.exports = router;

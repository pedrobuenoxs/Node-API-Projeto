const express = require("express");
const router = express.Router();
const { createValidator } = require("express-joi-validation");
const validator = createValidator({});
const {
  userQuerySchema,
  userDefaultBodySchema,
} = require("../middleware/validator");
const controller = require("../controllers/userController");

const UserController = require("../controllers/user.controller");
const UserService = require("../services/user.service");
const userRepository = require("../dbContent/users/db.repository");
const repository = new userRepository();
const service = new UserService(repository);
const userController = new UserController(service);

router.get("/users", validator.query(userQuerySchema), controller.getUser);
router.post(
  "/users",
  validator.body(userDefaultBodySchema),
  controller.createUser
);
router.put(
  "/users",
  validator.body(userDefaultBodySchema),
  controller.updateUser
);

router.get(
  "/users/:id",
  async (req, res) => await userController.getById(req, res)
);

module.exports = router;

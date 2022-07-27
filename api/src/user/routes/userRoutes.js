const express = require("express");
const router = express.Router();
const { createValidator } = require("express-joi-validation");
const validator = createValidator({});
const {
  userQuerySchema,
  userDefaultBodySchema,
} = require("./middlewares/validator");
const controller = require("../controllers/userController");

const UserController = require("../controllers/user.controller");
const UserService = require("../services/user.service");
const userRepository = require("../repository/users/db.repository");
const repository = new userRepository();
const service = new UserService(repository);
const userController = new UserController(service);

router.get("/users", async (req, res) => {
  await userController.getAll(req, res);
});
router.get(
  "/users/:id",
  validator.params(userQuerySchema),
  async (req, res) => await userController.getById(req, res)
);
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

module.exports = router;

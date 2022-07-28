const express = require("express");
const router = express.Router();
const { createValidator } = require("express-joi-validation");
const validator = createValidator({});
const {
  LoginSchema,
  UserSchema,
  byIDSchema,
} = require("./middlewares/validator");

const UserController = require("../controllers/user.controller");
const UserService = require("../services/user.service");
const userRepository = require("../repository/repository");
const repository = new userRepository();
const service = new UserService(repository);
const userController = new UserController(service);

router.get("/users/login", validator.body(LoginSchema), async (req, res) => {
  userController.login(req, res);
}); // login
router.post(
  "/users/register",
  validator.body(UserSchema),
  async (req, res) => await userController.create(req, res)
);

router.get("/users", async (req, res) => {
  await userController.getAll(req, res);
});
router.get(
  "/users/:id",
  validator.query(byIDSchema),
  async (req, res) => await userController.getById(req, res)
);
router.put("/users", validator.body(UserSchema), async (req, res) =>
  userController.update(req, res)
);
router.delete("/users/:id", validator.query(byIDSchema), async (req, res) =>
  userController.delete(req, res)
);

module.exports = router;

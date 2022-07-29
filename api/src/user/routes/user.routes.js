const express = require("express");
const router = express.Router();
const { createValidator } = require("express-joi-validation");
const validator = createValidator({});
const {
  LoginSchema,
  UserSchema,
  byIDSchema,
} = require("./middlewares/validator");

const UserRepository = require("../repository/user.repository");
const RegisterUserService = require("../services/register.user.service");
const RegisterUserController = require("../controllers/register.user.controller");

const repository = new UserRepository();
const service = new RegisterUserService(repository);
const controller = new RegisterUserController(service);

router.post(
  "/users/register",
  validator.body(UserSchema),
  async (req, res) => await controller.register(req, res)
);

module.exports = router;

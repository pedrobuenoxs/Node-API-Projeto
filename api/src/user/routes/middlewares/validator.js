const Joi = require("joi");

const LoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const UserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const byIDSchema = Joi.object({
  id: Joi.string().required(),
});

module.exports = {
  LoginSchema,
  UserSchema,
  byIDSchema,
};

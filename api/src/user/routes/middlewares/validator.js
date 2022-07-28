const Joi = require("joi");

const userQuerySchema = Joi.object({
  id: Joi.string().required(),
});

const LoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const UserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  birthDate: Joi.date().required(),
});

const byIDSchema = Joi.object({
  id: Joi.string().required(),
});

module.exports = {
  LoginSchema,
  UserSchema,
  byIDSchema,
};

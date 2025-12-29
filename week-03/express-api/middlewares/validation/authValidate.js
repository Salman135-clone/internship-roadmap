const Joi = require('joi');

exports.signupSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})

exports.loginSchema = Joi.object({
    email: Joi.string().lowercase().required(),
    password: Joi.string().required(),
})
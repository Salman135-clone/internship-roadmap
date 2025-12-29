const Joi = require('joi');

exports.productCreateSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().integer().required(),
    quantity: Joi.number().integer().required(),
})


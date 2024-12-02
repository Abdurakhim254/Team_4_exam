import Joi from "joi";

export const orderItemsValidationSchema=Joi.object({
    id:Joi.string(),
    order_id:Joi.string().required(),
    product_id:Joi.string().required(),
    quantity:Joi.number().integer().required(),
    price:Joi.number().integer().required(),
    subtotal:Joi.number().integer().required()
})
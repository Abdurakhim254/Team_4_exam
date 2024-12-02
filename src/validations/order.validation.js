import Joi from "joi";

export const orderValidationSchema=Joi.object({
    id:Joi.string(),
    customer_id:Joi.string().required(),
    order_date:Joi.date(),
    status:Joi.string().min(5).required(),
    total_amount:Joi.number().integer().required()
})
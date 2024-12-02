import Joi from "joi";

export const paymentValidationSchema=Joi.object({
    id:Joi.string(),
    order_id:Joi.string().required(),
    payment_date:Joi.date(),
    payment_method:Joi.string().min(5).required(),
    amount:Joi.number().integer().required(),
    status:Joi.string().min(5).required()
})
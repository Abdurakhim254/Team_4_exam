import Joi from "joi";

export const customerNotesValidationSchema=Joi.object({
    id:Joi.string(),
    customer_id:Joi.string().required(),
    created_at:Joi.date(),
    content:Joi.string().min(5).required()
})


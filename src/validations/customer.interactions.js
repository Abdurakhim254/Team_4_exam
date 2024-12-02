import Joi from "joi";

export const customerInteractionValidationSchema=Joi.object({
    id:Joi.string(),
    customer_id:Joi.string().required(),
    interaction_date:Joi.date(),
    type:Joi.string().min(4).required(),
    notes:Joi.string().min(5).required()
})
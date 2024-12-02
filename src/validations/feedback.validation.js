import Joi from "joi";

export const feedbackValidationSchema=Joi.object({
    id:Joi.string(),
    customer_id:Joi.string().required(),
    submitted_at:Joi.date(),
    feedback_type:Joi.string().min(5).required(),
    content:Joi.string().min(5).required()
})


export const updateFeedbackValidationSchema=Joi.object({
    id:Joi.string(),
    customer_id:Joi.string(),
    submitted_at:Joi.date(),
    feedback_type:Joi.string().min(5),
    content:Joi.string().min(5)
})
import Joi from "joi";

export const addressValidationSchema=Joi.object({
    id:Joi.string(),
    customer_id:Joi.string().required(),
    address_type:Joi.string().required(),
    address_line_1:Joi.string().min(8).required(),
    address_line_2:Joi.string().min(8).required(),
    city:Joi.string().min(4).required(),
    state:Joi.string().min(8).required(),
    zip_code:Joi.string().min(8).required(),
    country:Joi.string().min(5).required()
})
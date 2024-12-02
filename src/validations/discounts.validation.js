import Joi from "joi";

export const discountValidationSchema=Joi.object({
    id:Joi.string(),
    product_id:Joi.string().required(),
    code:Joi.string().min(5).required(),
    description:Joi.string().min(8).required(),
    discount_type:Joi.string().min(8).required(),
    expiration_date:Joi.date().required()
})
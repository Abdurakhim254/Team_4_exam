import Joi from "joi";

export const authRegisterValidationSchema=Joi.object({
    id:Joi.string(),
    first_name:Joi.string().min(3).required(),
    last_name:Joi.string().min(3).required(),
    email:Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
    password:Joi.string().min(5).required(),
    role:Joi.string().min(4),
    phone:Joi.string().required(),
    is_active:Joi.boolean(),
    date_of_birth:Joi.date().required(),
    created_at:Joi.date(),
    updated_at:Joi.date()
})

export const authLoginValidationSchema=Joi.object({
    email:Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
    password:Joi.string().min(5).required()
})
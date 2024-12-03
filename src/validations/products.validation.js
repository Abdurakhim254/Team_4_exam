import Joi from "joi";

export const productValidationSchema = Joi.object({
  customer_id: Joi.string().required(),
  name: Joi.string().min(3).required(),
  description: Joi.string().min(8).required(),
  price: Joi.number().required(),
  stock: Joi.number().required(),
});

import Joi from "joi";

export const createOrderValidationSchema = Joi.object({
  customer_id: Joi.string().required(),
  order_date: Joi.date(),
  status: Joi.string()
    .min(5)
    .required()
    .valid("pending", "shipped", "delivered", "cancelled"),
  total_amount: Joi.number().integer().required(),
});

export const updateOrderValidationSchema = Joi.object({
  customer_id: Joi.string(),
  order_date: Joi.date(),
  status: Joi.string()
    .min(5)
    .valid("pending", "shipped", "delivered", "cancelled"),
  total_amount: Joi.number().integer(),
});

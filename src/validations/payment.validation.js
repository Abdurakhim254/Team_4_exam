import Joi from "joi";

export const createPaymentValidationSchema = Joi.object({
  order_id: Joi.string().required(),
  payment_method: Joi.string()
    .valid("credit_card", "paypal", "bank_transfer")
    .required(),
  amount: Joi.number().required(),
  status: Joi.string().valid("pending", "failed", "fulfilled").required(),
  payment_date: Joi.date(),
});

export const updatePaymentValidationSchema = Joi.object({
  order_id: Joi.string(),
  payment_method: Joi.string().valid("credit_card", "paypal", "bank_transfer"),
  amount: Joi.number(),
  status: Joi.string().valid("pending", "failed", "fulfilled"),
  payment_date: Joi.date(),
});

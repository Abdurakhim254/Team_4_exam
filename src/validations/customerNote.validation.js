import Joi from "joi";

export const createCustomerNotesValidationSchema = Joi.object({
  customer_id: Joi.string().required(),
  created_at: Joi.date(),
  content: Joi.string().min(5).required(),
});

export const updateCustomerNotesValidationSchema = Joi.object({
  customer_id: Joi.string(),
  created_at: Joi.date(),
  content: Joi.string().min(5),
});

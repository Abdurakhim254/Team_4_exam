import Joi from "joi";

export const createCustomerInteractionValidationSchema = Joi.object({
  id: Joi.string(),
  customer_id: Joi.string().required(),
  interaction_date: Joi.date(),
  type: Joi.string().min(4).required(),
  notes: Joi.string().min(5).required(),
});

export const updateCustomerInteractionValidationSchema = Joi.object({
  id: Joi.string(),
  customer_id: Joi.string(),
  interaction_date: Joi.date(),
  type: Joi.string()
    .valid("email", "call", "meeting")
    .messages({ msg: "write email,call or meeting" }),
  notes: Joi.string().min(5),
});

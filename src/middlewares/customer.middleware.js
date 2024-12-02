import { statusCodes } from "../config/index.js";

export const CheckCustomerDatamiddleware = (schema) => {
  return (req, res, next) => {
    const { customer_id, created_at, content } = req.body;

    const { error } = schema.validate({ customer_id, created_at, content });

    if (error) {
      return res.status(statusCodes.bad).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};

export const UpdateCheckCustomerDatamiddleware = (schema) => {
  return (req, res, next) => {
    const { id } = req.params;

    const { customer_id, created_at, content } = req.body;

    const { error } = schema.validate({ id, customer_id, created_at, content });

    if (error) {
      return res.status(statusCodes.bad).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};

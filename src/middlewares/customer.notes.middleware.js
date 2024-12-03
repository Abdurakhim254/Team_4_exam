import { statusCodes } from "../config/index.js";

export const CheckCustomerNotesDatamiddleware = (schema) => {
  return (req, res, next) => {
    const { customer_id, content } = req.body;

    const { error } = schema.validate({ customer_id, content });

    if (error) {
      return res.status(statusCodes.bad).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};

export const UpdateCheckCustomerNotesDatamiddleware = (schema) => {
  return (req, res, next) => {
    const { customer_id, content } = req.body;

    const { error } = schema.validate({ customer_id, content });

    if (error) {
      return res.status(statusCodes.bad).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};

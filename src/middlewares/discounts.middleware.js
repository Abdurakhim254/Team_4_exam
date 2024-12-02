import { statusCodes } from "../config/index.js";

export const CheckdiscountDatamiddleware = (schema) => {
  return (req, res, next) => {
    const { product_id, code, description, discount_type, expiration_date } =
      req.body;
    const { error } = schema.validate({
      product_id,
      code,
      description,
      discount_type,
      expiration_date,
    });
    if (error) {
      return res.status(statusCodes.bad).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};

export const UpdateCheckdiscountDatamiddleware = (schema) => {
  return (req, res, next) => {
    const { id } = req.params;
    const { product_id, code, description, discount_type, expiration_date } =
      req.body;
    const { error } = schema.validate({
      id,
      product_id,
      code,
      description,
      discount_type,
      expiration_date,
    });
    if (error) {
      return res.status(statusCodes.bad).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};

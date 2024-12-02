import { statusCodes } from "../config/index.js";

export const CheckAddressDatamiddleware = (schema) => {
  return (req, res, next) => {
    const {
      customer_id,
      address_type,
      address_line_1,
      address_line_2,
      city,
      state,
      zip_code,
      country,
    } = req.body;
    const { error } = schema.validate({
      customer_id,
      address_type,
      address_line_1,
      address_line_2,
      city,
      state,
      zip_code,
      country,
    });
    if (error) {
      return res.status(statusCodes.bad).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};

export const UpdateAddressDatamiddleware = (schema) => {
  return (req, res, next) => {
    const { id } = req.params;
    const {
      customer_id,
      address_type,
      address_line_1,
      address_line_2,
      city,
      state,
      zip_code,
      country,
    } = req.body;
    const { error } = schema.validate({
      id,
      customer_id,
      address_type,
      address_line_1,
      address_line_2,
      city,
      state,
      zip_code,
      country,
    });
    if (error) {
      return res.status(statusCodes.bad).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};

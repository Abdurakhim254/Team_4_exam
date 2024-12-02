import { statusCodes } from "../config/index.js";

export const checkPaymentDatamiddleware = (schema) => {
  return (req, res, next) => {
    const { order_id, payment_date, payment_method, amount, status } = req.body;
    const { error } = schema.validate({
      order_id,
      payment_date,
      payment_method,
      amount,
      status,
    });
    if (error) {
      return res.status(statusCodes.bad).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};

export const UpdatecheckPaymentDatamiddleware = (schema) => {
  return (req, res, next) => {
    const { id } = req.params;
    const { order_id, payment_date, payment_method, amount, status } = req.body;
    const { error } = schema.validate({
      id,
      order_id,
      payment_date,
      payment_method,
      amount,
      status,
    });
    if (error) {
      return res.status(statusCodes.bad).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};

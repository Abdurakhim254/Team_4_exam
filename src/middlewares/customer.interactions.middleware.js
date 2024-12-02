import { statusCodes } from "../config/index.js";

export const CustomerInteractionDatamiddleware = (schema) => {
  return (req, res, next) => {
    const { customer_id, interaction_date, type, notes } = req.body;
    const { error } = schema.validate({
      customer_id,
      interaction_date,
      type,
      notes,
    });
    if (error) {
      return res.status(statusCodes.bad).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};

export const UpdateCustomerInteractionDatamiddleware = (schema) => {
  return (req, res, next) => {
    const { id } = req.params;
    const { customer_id, interaction_date, type, notes } = req.body;
    const { error } = schema.validate({
      id,
      customer_id,
      interaction_date,
      type,
      notes,
    });
    if (error) {
      return res.status(statusCodes.bad).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};

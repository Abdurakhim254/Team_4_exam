import { statusCodes } from "../config/index.js";

export const checkFeedbackDatamiddleware = (schema) => {
  return (req, res, next) => {
    const { customer_id, submitted_at, feedback_type, content } = req.body;
    const { error } = schema.validate({
      customer_id,
      submitted_at,
      feedback_type,
      content,
    });
    if (error) {
      return res.status(statusCodes.bad).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};

export const UpdatecheckFeedbackDatamiddleware = (schema) => {
  return (req, res, next) => {
    const { id } = req.params;
    const { customer_id, submitted_at, feedback_type, content } = req.body;
    const { error } = schema.validate({
      id,
      customer_id,
      submitted_at,
      feedback_type,
      content,
    });
    if (error) {
      return res.status(statusCodes.bad).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};

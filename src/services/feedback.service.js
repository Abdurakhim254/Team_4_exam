import { id } from "../helpers/index.js";
import { connection } from "../database/index.js";

export const getAllFeedbacksService = async () => {
  try {
    const res = await connection.select("*").from("feedback");

    if (res.length >= 1) return res;

    return "Feedbacklar topilmadi";
  } catch (error) {
    return error;
  }
};

export const getFeedbackByIdService = async (id) => {
  try {
    const res = await connection
      .select("*")
      .from("feedback")
      .where({ id })
      .first();

    if (!res) return "Feedback topilmadi!";

    return res;
  } catch (error) {
    return error;
  }
};

export const createFeedbackService = async ({
  customer_id,
  submitted_at,
  feedback_type,
  content,
}) => {
  try {
    await connection("feedback").insert({
      id,
      customer_id,
      submitted_at,
      feedback_type,
      content,
    });

    return "Feedback yangilandi";
  } catch (error) {
    return error;
  }
};

export const updateFeedbackByIdService = async ({
  id,
  customer_id,
  submitted_at,
  feedback_type,
  content,
}) => {
  try {
    const result = await connection.select("*").from("feedback").where({ id });

    if (result.length >= 1) {
      await connection
        .select("*")
        .from("feedback")
        .where({ id })
        .update({ customer_id, submitted_at, feedback_type, content });
      return "Feedback yangilandi.";
    }

    return "Yangilanadigan feedback topilmadi!";
  } catch (error) {
    return error;
  }
};

export const deleteFeedbackByIdService = async (id) => {
  try {
    const result = await connection
      .select("*")
      .table("feedback")
      .where({ id })
      .del()
      .returning("*");

    if (result.length >= 1) return "Feedback o'chirildi.";

    return "O'chiriladigan feedback topilmadi!";
  } catch (error) {
    return error;
  }
};

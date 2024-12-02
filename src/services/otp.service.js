import { logger } from "../utils/index.js";
import { connection } from "../database/index.js";

export const saveOtp = async (otp) => {
  try {
    await connection("otp").insert({ otp });

    logger.info("Otp saved");
  } catch (error) {
    logger.error(error);
  }
};

export const findByOtp = async (otp) => {
  try {
    const res = await connection.select("*").from("otp").where({ otp });

    if (res.length >= 1) return res;

    return "Otp topilmadi";
  } catch (error) {
    return error;
  }
};

export const deleteOtp = async (otp) => {
  try {
    const res = await connection
      .select("*")
      .from("otp")
      .where({ otp })
      .returning("*")
      .del();

    if (res.length >= 1) return "Otp o'chirildi";

    return "Otp topilmadi";
  } catch (error) {
    return error;
  }
};

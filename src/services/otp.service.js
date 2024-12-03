import { connection } from "../database/index.js";

export const saveOtp = async (otp) => {
  try {
    await connection("otp").insert({ otp });

    return "Otp saved";
  } catch (error) {
    return error.message;
  }
};

export const findByOtp = async (otp) => {
  try {
    const res = await connection.select("*").from("otp").where({ otp });

    if (res.length >= 1) {
      return res;
    } else {
      return "Otp topilmadi";
    }
  } catch (error) {
    return error.message;
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

    if (res.length >= 1) {
      return "Otp o'chirildi";
    } else {
      return "Otp topilmadi";
    }
  } catch (error) {
    return error.message;
  }
};

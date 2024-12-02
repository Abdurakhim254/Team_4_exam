import { connection } from "../database/index.js";

export const findCustomerByEmailService = async (email) => {
  try {
    const res = await connection
      .select("*")
      .table("customer")
      .where({ email })
      .first();

    if (!res) return "Ro'yxatdan o'tishingiz kerak!";

    return res;
  } catch (error) {
    return error;
  }
};

export const deleteCustomerByEmailService = async (email) => {
  try {
    const res = await connection
      .select("*")
      .table("customer")
      .where({ email })
      .first();

    if (!res) return "O'chiriladigan foydalanuvchi topilmadi!";

    await connection.select("*").table("customer").where({ email }).del();

    return "Akkaunt o'chirildi";
  } catch (error) {
    return error;
  }
};

export const activateCustomerAccountService = async (email) => {
  try {
    const is_active = true;

    const res = await connection
      .select("*")
      .from("customer")
      .where({ email })
      .update({ is_active })
      .returning("*");

    if (res.length >= 1) return "Akkount aktivlashtirildi";

    return "Aktivlashtiriladigan akkount topilmadi!";
  } catch (error) {
    return error;
  }
};

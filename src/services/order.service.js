import { id } from "../helpers/index.js";
import { connection } from "../Database/index.js";


export const getAllOrdersService = async () => {
  try {
    const res = await connection.select("*").from("orders");

    if (res.length >= 1) return res;

    return "Orderlar topilmadi!";
  } catch (error) {
    return error;
  }
};

export const getOrderByIdService = async (id) => {
  try {
    const res = await connection
      .select("*")
      .from("orders")
      .where({ id })
  

    if (res.length >= 1) return res;

    return "Order topilmadi!";
  } catch (error) {
    return error;
  }
};

export const createOrderService = async ({
  customer_id,
  order_date,
  status,
  total_amount,
}) => {
  try {
    await connection("orders").insert({
      id,
      customer_id,
      order_date,
      status,
      total_amount,
    });

    return "Order yaratildi";
  } catch (error) {
    return error.message;
  }
};

export const updateOrderByIdService = async ({
  id,
  customer_id,
  order_date,
  status,
  total_amount,
}) => {
  try {
    const result = await connection.select("*").from("orders").where({ id });

    if (result.length >= 1) {
      await connection
        .select("*")
        .from("orders")
        .where({ id })
        .update({ customer_id, order_date, status, total_amount });
      return "Order yangilandi.";
    }

    return "Yangilanadigan order topilmadi!";
  } catch (error) {
    return error;
  }
};

export const deleteOrderByIdService = async (id) => {
  try {
    const result = await connection
      .select("*")
      .from("orders")
      .where({ id })
      .del()
      .returning("*");

    if (result.length >= 1) return "Order o'chirildi.";

    return "O'chiriladigan order topilmadi!";
  } catch (error) {
    return error;
  }
};

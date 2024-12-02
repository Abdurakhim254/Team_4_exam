import { id } from "../helpers/index.js";
import { connection } from "../Database/index.js";

export const getAllCustomerInteractionsService = async () => {
  try {
    const res = await connection.select("*").from("customer_interactions");

    if (res.length >= 1) return res;

    return "Customer interactionlar topilmadi!";
  } catch (error) {
    return error;
  }
};

export const getCustomerInteractionByIdService = async (id) => {
  try {
    const res = await connection
      .select("*")
      .from("customer_interactions")
      .where({ id })
    

    if (res.length >= 1) return res;

    return "Customer interaction topilmadi!";
  } catch (error) {
    return error;
  }
};

export const createCustomerInteractionService = async ({
  customer_id,
  type,
  notes,
}) => {
  try {
    await connection("customer_interactions").insert({
      id,
      customer_id,
      type,
      notes,
    });

    return "Customer interaction yaratildi";
  } catch (error) {
    return error.message;
  }
};

export const updateCustomerInteractionByIdService = async ({
  id,
  customer_id,
  type,
  notes,
}) => {
  try {
    const result = await connection
      .select("*")
      .from("customer_interactions")
      .where({ id });

    if (result.length >= 1) {
      await connection
        .select("*")
        .from("customer_interactions")
        .where({ id })
        .update({ customer_id, type, notes });
      return "Customer interaction yangilandi.";
    }

    return "Yangilanadigan customer interaction topilmadi!";
  } catch (error) {
    return error;
  }
};

export const deleteCustomerInteractionByIdService = async (id) => {
  try {
    const result = await connection
      .select("*")
      .table("customer_interactions")
      .where({ id })
      .del()
      .returning("*");

    if (result.length >= 1) return "Customer interaction o'chirildi.";

    return "O'chiriladigan customer interaction topilmadi!";
  } catch (error) {
    return error;
  }
};

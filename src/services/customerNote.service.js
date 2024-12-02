import { id } from "../helpers/index.js";
import { connection } from "../Database/index.js";

export const getAllCustomerNotesService = async () => {
  try {
    const res = await connection.select("*").from("custom_notes");

    if (res.length >= 1) return res;

    return "Customer notelar topilmadi!";
  } catch (error) {
    return error;
  }
};

export const getCustomerNoteByIdService = async (id) => {
  try {
    const res = await connection
      .select("*")
      .from("custom_notes")
      .where({ id })
    

    if (res.length >= 1) return res;

    return "Customer note topilmadi!";
  } catch (error) {
    return error;
  }
};

export const createCustomerNoteService = async ({ customer_id, content }) => {
  try {
    await connection("custom_notes").insert({
      id,
      customer_id,
      content,
    });

    return "Customer note yaratildi";
  } catch (error) {
    return error;
  }
};

export const updateCustomerNoteByIdService = async ({
  id,
  customer_id,
  content,
}) => {
  try {
    const result = await connection
      .select("*")
      .from("custom_notes")
      .where({ id });

    if (result.length >= 1) {
      await connection
        .select("*")
        .from("custom_notes")
        .where({ id })
        .update({ customer_id, content });
      return "Customer note yangilandi.";
    }

    return "Yangilanadigan customer note topilmadi!";
  } catch (error) {
    return error.message;
  }
};

export const deleteCustomerNoteByIdService = async (id) => {
  try {
    const result = await connection
      .select("*")
      .table("custom_notes")
      .where({ id })
      .del()
      .returning("*");

    if (result.length >= 1) return "Customer note o'chirildi.";

    return "O'chiriladigan customer note topilmadi!";
  } catch (error) {
    return error;
  }
};

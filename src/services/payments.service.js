import { createId } from "../helpers/index.js";
import { connection } from "../database/index.js";

export const createPaymentsService = async ({
  order_id,
  payment_method,
  amount,
  status,
}) => {
  try {
    const payment_date = { payment_date: connection.fn.now() };

    await connection("payments").insert({
      id: createId,
      order_id,
      payment_method,
      amount,
      status,
    });

    return "Payments created sucessfully";
  } catch (error) {
    return error.message;
  }
};

export const updatePaymentsService = async (
  id,
  order_id,
  payment_method,
  amount
) => {
  try {
    const result = await connection.select("*").from("payments").where({ id });

    if (result.length >= 1) {
      await connection
        .select("*")
        .from("payments")
        .where({ id })
        .update({ order_id, payment_method, amount });

      return "Payments Updated successfuly";
    }
  } catch (error) {
    return error.message;
  }
};
export const deletePaymentsService = async (id) => {
  try {
    const result = await connection
      .select("*")
      .table("payments")
      .where({ id })
      .del()
      .returning("*");

    if (result.length >= 1) {
      return "Payments is deleted successfuly";
    } else {
      return "Deleting payments is not found";
    }
  } catch (error) {
    return error.message;
  }
};

export const getAllPaymentsService = async () => {
  try {
    const res = await connection.select("*").from("payments");

    if (res.length >= 1) {
      return res;
    }

    return "Payments is not found";
  } catch (error) {
    return error.message;
  }
};
export const getPaymentByIdService = async (id) => {
  try {
    const res = await connection.select("*").from("payments").where({ id });

    if (res.length >= 1) {
      return res;
    }

    return "Payments is not found";
  } catch (error) {
    return error.message;
  }
};

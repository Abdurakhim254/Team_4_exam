import { createId } from "../helpers/index.js";
import { connection } from "../database/index.js";

export const getAllOrder_itemsService = async () => {
  try {
    const res = await connection.select("*").from("order_items");

    if (res.length >= 1) {
      return res;
    }

    return "Order_items is not found";
  } catch (error) {
    return error.message;
  }
};
export const getOrder_itemByIdService = async (id) => {
  try {
    const res = await connection.select("*").from("order_items").where({ id });

    if (res.length >= 1) {
      return res;
    }

    return "Order_items is not found";
  } catch (error) {
    return error.message;
  }
};
export const createOrder_itemService = async (
  order_id,
  product_id,
  quantity,
  price,
  subtotal
) => {
  try {
    await connection("order_items").insert({
      id: createId,
      order_id,
      product_id,
      quantity,
      price,
      subtotal,
    });

    return "Order_item is created";
  } catch (error) {
    return error.message;
  }
};
export const updateOrder_itemByIdService = async (
  id,
  order_id,
  product_id,
  quantity,
  price,
  subtotal
) => {
  try {
    const result = await connection
      .select("*")
      .from("order_items")
      .where({ id });

    if (result.length >= 1) {
      await connection
        .select("*")
        .from("order_items")
        .where({ id })
        .update({ order_id, product_id, quantity, price, subtotal });

      return "Order_item is updated successfuly";
    } else {
      return "Updating order_item is not found";
    }
  } catch (error) {
    return error.message;
  }
};

export const deleteOrder_itemByIdService = async (id) => {
  try {
    const result = await connection
      .select("*")
      .table("order_items")
      .where({ id })
      .del()
      .returning("*");

    if (result.length >= 1) {
      return "Order_item is deleted successfully";
    } else {
      return "Delete order_item is not found";
    }
  } catch (error) {
    return error.message;
  }
};

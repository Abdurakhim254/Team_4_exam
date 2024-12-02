import { createId } from "../helpers/index.js";
import { connection } from "../database/index.js";

export const getAllDiscountsService = async () => {
  try {
    const res = await connection.select("*").from("discount");

    if (res.length >= 1) {
      return res;
    }

    return "Discounts is not found";
  } catch (error) {
    return error.message;
  }
};

export const getDiscountsByIdService = async () => {
  try {
    const res = await connection.select("*").from("discount").where({ id });

    if (res.length >= 1) {
      return res;
    }

    return "Discount is not found";
  } catch (error) {
    return error.message;
  }
};

export const createDiscountService = async (
  product_id,
  code,
  description,
  discount_type,
  expiration_date
) => {
  try {
    await connection("discount").insert({
      id: createId,
      product_id,
      code,
      description,
      discount_type,
      expiration_date,
    });

    return "Discount is created successfuly";
  } catch (error) {
    return error.message;
  }
};

export const updateDiscountByIdService = async (
  id,
  product_id,
  code,
  description,
  discount_type,
  expiration_date
) => {
  try {
    const result = await connection.select("*").from("discount").where({ id });

    if (result.length >= 1) {
      await connection.select("*").from("discount").where({ id }).update({
        product_id,
        code,
        description,
        discount_type,
        expiration_date,
      });

      return "Discount updated successfully";
    } else {
      return "Updating discount is not found";
    }
  } catch (error) {
    return error.message;
  }
};

export const deleteDiscountByIdService = async (id) => {
  try {
    const result = await connection
      .select("*")
      .table("discount")
      .where({ id })
      .del()
      .returning("*");

    if (result.length >= 1) {
      return "Discount is deleted successfully";
    } else {
      return "Deleting discount is not find";
    }
  } catch (error) {
    return error.message;
  }
};

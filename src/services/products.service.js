import { connection } from "../Database/index.js";
import { id } from "../helpers/index.js";

export const getAllProudctsService = async () => {
  try {
    const res = await connection.select("*").from("products");
    if (res.length >= 1) {
      return res;
    } else {
      return "Products is not found";
    }
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const getProductByIdService = async (id) => {
  try {
    const res = await connection.select("*").from("products").where({ id });
    if (res.length >= 1) {
      return res;
    }
    return "Products is not found";
  } catch (error) {
    return error.message;
  }
};

export const createProductservice = async ({
  customer_id,
  name,
  description,
  price,
  stock,
}) => {
  try {
    await connection("products").insert({
      id,
      customer_id,
      name,
      description,
      price,
      stock,
    });
    return "Product created successfully";
  } catch (error) {
    return error.message;
  }
};

export const updateProductService = async ({
  id,
  customer_id,
  name,
  description,
  price,
  stock,
}) => {
  try {
    const result = await connection.select("*").from("products").where({ id });
    if (result.length >= 1) {
      await connection
        .select("*")
        .from("products")
        .where({ id })
        .update({ customer_id, name, description, price, stock });
      return "Product is updated successfuly";
    }
  } catch (error) {
    return error.message;
  }
};

export const deleteProductService = async (id) => {
  try {
    const result = await connection
      .select("*")
      .table("products")
      .where({ id })
      .del()
      .returning("*");
    if (result.length >= 1) {
      return "Product is deleted successfully";
    } else {
      return "Deleting product is not found";
    }
    return "Product is deleted successfuly";
  } catch (error) {
    return error.message;
  }
};

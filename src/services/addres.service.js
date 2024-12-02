import { connection } from "../Database/index.js";
import { id } from "../helpers/index.js";

export const getAllAdressesService = async () => {
  try {
    const res = await connection.select("*").from("address");
    if (res.length >= 1) {
      return res;
    }
    return "Address is not found";
  } catch (error) {
    return error.message;
  }
};

export const getAddressByIdService = async (id) => {
  try {
    const res = await connection.select("*").from("address").where({ id });
    if (res.length >= 1) {
      return res;
    }
    return "Address is not found";
  } catch (error) {
    return error.message;
  }
};

export const createAddressService = async (
  customer_id,
  address_type,
  address_line_1,
  address_line_2,
  city,
  state,
  zip_code,
  country
) => {
  try {
    await connection("address").insert({
      id,
      customer_id,
      address_type,
      address_line_1,
      address_line_2,
      city,
      state,
      zip_code,
      country,
    });
    return "Address created successfully";
  } catch (error) {
    return error.message;
  }
};

export const updateAddressService = async (
  id,
  customer_id,
  address_type,
  address_line_1,
  address_line_2,
  city,
  state,
  zip_code,
  country
) => {
  try {
    const result = await connection.select("*").from("address").where({ id });
    if (result.length >= 1) {
      await connection.select("*").from("address").where({ id }).update({
        customer_id,
        address_type,
        address_line_1,
        address_line_2,
        city,
        state,
        zip_code,
        country,
      });
      return "Address updated successfully updated";
    } else {
      return "Updating address is not found";
    }
  } catch (error) {
    return error.message;
  }
};

export const deleteAddressService = async (id) => {
  try {
    const result = await connection
      .select("*")
      .table("address")
      .where({ id })
      .del()
      .returning("*");
    if (result.length >= 1) {
      return "Address is deleted successfuly";
    } else {
      return "Deleting address is not found";
    }
  } catch (error) {
    return error.message;
  }
};

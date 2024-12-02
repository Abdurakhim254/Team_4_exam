import { statusCodes } from "../config/index.js";
import {
  getAllAdressesService,
  getAddressByIdService,
  createAddressService,
  updateAddressService,
  deleteAddressService,
} from "../services/index.js";

const ok = statusCodes.ok;
const not_found = statusCodes.not_found;
const medium = statusCodes.medium;
const bad = statusCodes.bad;
const created = statusCodes.created;

export const addressController = {
  getAlladdress: async function (req, res) {
    try {
      const result = await getAllAdressesService();
      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
  getAdressById: async function (req, res) {
    try {
      const { id } = req.params;
      const result = await getAddressByIdService(id);
      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
  createAddress: async function (req, res) {
    try {
      const {
        customer_id,
        address_type,
        address_line_1,
        address_line_2,
        city,
        state,
        zip_code,
        country,
      } = req.body;
      const result = await createAddressService({
        customer_id,
        address_type,
        address_line_1,
        address_line_2,
        city,
        state,
        zip_code,
        country,
      });
      res.status(created).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
  updateAddress: async function (req, res) {
    try {
      const { id } = req.params;

      const {
        address_type,
        address_line_1,
        address_line_2,
        city,
        state,
        zip_code,
        country,
      } = req.body;
      const result = await updateAddressService({
        id,
        address_type,
        address_line_1,
        address_line_2,
        city,
        state,
        zip_code,
        country,
      });
      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
  deleteAddress: async function (req, res) {
    try {
      const { id } = req.params;
      const result = await deleteAddressService(id);
      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
};

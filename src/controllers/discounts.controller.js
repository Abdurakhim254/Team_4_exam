import { statusCodes } from "../config/index.js";
import {
  getAllDiscountsService,
  getDiscountsByIdService,
  createDiscountService,
  updateDiscountService,
  deleteDiscountService,
} from "../services/index.js";

const ok = statusCodes.ok;
const not_found = statusCodes.not_found;
const medium = statusCodes.medium;
const bad = statusCodes.bad;
const created = statusCodes.created;

export const discountsController = {
  getAllDiscounts: async function (req, res) {
    try {
      const result = await getAllDiscountsService();
      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
  getDiscountsById: async function (req, res) {
    try {
      const { id } = req.params;
      const result = await getDiscountsByIdService(id);
      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
  createDiscount: async function (req, res) {
    try {
      const { product_id, code, description, discount_type, expiration_date } =
        req.body;
      const result = await createDiscountService(
        product_id,
        code,
        description,
        discount_type,
        expiration_date
      );
      res.status(created).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
  updateDiscount: async function (req, res) {
    try {
      const { id } = req.params;
      const { product_id, code, description, discount_type, expiration_date } =
        req.body;
      const result = await updateDiscountService(
        id,
        product_id,
        code,
        description,
        discount_type,
        expiration_date
      );
      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
  deleteDiscount: async function (req, res) {
    try {
      const { id } = req.params;
      const result = await deleteDiscountService(id);
      res.status(ok).send(result);
    } catch (eror) {
      res.status(bad).send(error.message);
    }
  },
};

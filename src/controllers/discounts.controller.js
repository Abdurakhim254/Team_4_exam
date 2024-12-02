import { statusCodes } from "../config/index.js";
import {
  getAllDiscountsService,
  getDiscountsByIdService,
  createDiscountService,
  updateDiscountByIdService,
  deleteDiscountByIdService,
} from "../services/index.js";

const ok = statusCodes.ok;
const not_found = statusCodes.not_found;
const medium = statusCodes.medium;
const bad = statusCodes.bad;
const created = statusCodes.created;

export const discountsController = {
  getAllDiscountsCon: async function (req, res) {
    try {
      const result = await getAllDiscountsService();

      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },

  getDiscountsByIdCon: async function (req, res) {
    try {
      const { id } = req.params;

      const result = await getDiscountsByIdService(id);

      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },

  createDiscountCon: async function (req, res) {
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

  updateDiscountByIdCon: async function (req, res) {
    try {
      const { id } = req.params;

      const { product_id, code, description, discount_type, expiration_date } =
        req.body;

      const result = await updateDiscountByIdService(
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

  deleteDiscountByIdCon: async function (req, res) {
    try {
      const { id } = req.params;

      const result = await deleteDiscountByIdService(id);

      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
};

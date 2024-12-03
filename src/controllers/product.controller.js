import { statusCodes } from "../config/index.js";
import {
  getAllProudctsService,
  getProductByIdService,
  createProductservice,
  updateProductService,
  deleteProductService,
} from "../services/index.js";

const ok = statusCodes.ok;
const not_found = statusCodes.not_found;
const medium = statusCodes.medium;
const bad = statusCodes.bad;
const created = statusCodes.created;

export const productsConttroller = {
  getAllProducts: async function (req, res) {
    try {
      const result = await getAllProudctsService();

      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },

  getProductById: async (req, res) => {
    try {
      const { id } = req.params;

      const result = await getProductByIdService(id);

      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },

  createProduct: async function (req, res) {
    try {
      const { customer_id, name, description, price, stock } = req.body;

      const result = await createProductservice({
        customer_id,
        name,
        description,
        price,
        stock,
      });

      res.status(created).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },

  updateProduct: async function (req, res) {
    try {
      const { id } = req.params;

      const { customer_id, name, description, price, stock } = req.body;

      const result = await updateProductService({
        id,
        customer_id,
        name,
        description,
        price,
        stock,
      });

      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },

  deleteProduct: async function (req, res) {
    try {
      const { id } = req.params;

      const result = await deleteProductService(id);

      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
};

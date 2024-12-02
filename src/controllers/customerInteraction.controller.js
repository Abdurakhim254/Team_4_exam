import { logger } from "../utils/index.js";
import { statusCodes } from "../config/index.js";
import {
  createCustomerInteractionService,
  deleteCustomerInteractionByIdService,
  getAllCustomerInteractionsService,
  getCustomerInteractionByIdService,
  updateCustomerInteractionByIdService,
} from "../services/index.js";

const ok = statusCodes.ok;
const not_found = statusCodes.not_found;
const medium = statusCodes.medium;
const bad = statusCodes.bad;
const created = statusCodes.created;

export const customerInteractionObj = {
  getAllCustomerInteractionsCon: async function (req, res) {
    try {
      const result = await getAllCustomerInteractionsService();

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  getCustomerInteractionByIdCon: async function (req, res) {
    try {
      const { id } = req.params;

      const result = await getCustomerInteractionByIdService(id);

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  createCustomerInteractionCon: async function (req, res) {
    try {
      const { customer_id, content } = req.body;

      const result = await createCustomerInteractionService({
        customer_id,
        content,
      });

      res.status(created).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  updateCustomerInteractionByIdCon: async function (req, res) {
    try {
      const { id } = req.params;
      const { customer_id, content } = req.body;

      const result = await updateCustomerInteractionByIdService({
        id,
        customer_id,
        content,
      });

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  deleteCustomerInteractionByIdCon: async function (req, res) {
    try {
      const { id } = req.params;

      const result = await deleteCustomerInteractionByIdService(id);

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },
};

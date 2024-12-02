import { logger } from "../utils/logger/logger.js";
import { statusCodes } from "../config/index.js";
import {
  createCustomerNoteService,
  deleteCustomerNoteByIdService,
  getAllCustomerNotesService,
  getCustomerNoteByIdService,
  updateCustomerNoteByIdService,
} from "../services/index.js";

const ok = statusCodes.ok;
const not_found = statusCodes.not_found;
const medium = statusCodes.medium;
const bad = statusCodes.bad;
const created = statusCodes.created;

export const customerNoteObj = {
  getAllCustomerNotesCon: async function (req, res) {
    try {
      const result = await getAllCustomerNotesService();

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  getCustomerNoteByIdCon: async function (req, res) {
    try {
      const { id } = req.params;

      const result = await getCustomerNoteByIdService(id);

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  createCustomerNoteCon: async function (req, res) {
    try {
      const { customer_id, content } = req.body;

      const result = await createCustomerNoteService({
        customer_id,
        content,
      });

      res.status(created).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  updateCustomerNoteByIdCon: async function (req, res) {
    try {
      const { id } = req.params;
      const { customer_id, content } = req.body;

      const result = await updateCustomerNoteByIdService({
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

  deleteCustomerNoteByIdCon: async function (req, res) {
    try {
      const { id } = req.params;

      const result = await deleteCustomerNoteByIdService(id);

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },
};

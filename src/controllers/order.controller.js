import { logger } from "../utils/logger/logger.js";
import { statusCodes } from "../config/index.js";
import {
  createOrderService,
  deleteOrderByIdService,
  getAllOrdersService,
  getOrderByIdService,
  updateOrderByIdService,
} from "../services/index.js";

const ok = statusCodes.ok;
const not_found = statusCodes.not_found;
const medium = statusCodes.medium;
const bad = statusCodes.bad;
const created = statusCodes.created;

export const orderObj = {
  getAllOrdersCon: async function (req, res) {
    try {
      const result = await getAllOrdersService();

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  getOrderByIdCon: async function (req, res) {
    try {
      const { id } = req.params;

      const result = await getOrderByIdService(id);

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  createOrderCon: async function (req, res) {
    try {
      const { customer_id, order_date, status, total_amount } = req.body;

      const result = await createOrderService({
        customer_id,
        order_date,
        status,
        total_amount,
      });

      res.status(created).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  updateOrderByIdCon: async function (req, res) {
    try {
      const { id } = req.params;
      const { customer_id, order_date, status, total_amount } = req.body;
      const result = await updateOrderByIdService({
        id,
        customer_id,
        order_date,
        status,
        total_amount,
      });

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },

  deleteOrderByIdCon: async function (req, res) {
    try {
      const { id } = req.params;
      const result = await deleteOrderByIdService(id);

      res.status(ok).send(result);
    } catch (error) {
      logger.error(error);
      res.status(bad).send(error.message);
    }
  },
};

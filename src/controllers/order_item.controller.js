import { statusCodes } from "../config/index.js";
import {
  getAllorder_itemsService,
  getOrder_itemByIdService,
  createOrder_itemService,
  updateOrder_itemService,
  deleteOrder_itemService,
} from "../services/index.js";

const ok = statusCodes.ok;
const not_found = statusCodes.not_found;
const medium = statusCodes.medium;
const bad = statusCodes.bad;
const created = statusCodes.created;

export const order_itemsController = {
  getAllOrder_items: async function (req, res) {
    try {
      const result = await getAllorder_itemsService();
      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
  getOrder_itemById: async function (req, res) {
    try {
      const { id } = req.params;
      const result = await getOrder_itemByIdService(id);
      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
  createOrder_item: async function (req, res) {
    try {
      const { order_id, product_id, quantity, price, subtotal } = req.body;
      const result = await createOrder_itemService({
        order_id,
        product_id,
        quantity,
        price,
        subtotal,
      });
      res.status(created).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
  updateOrder_item: async function (req, res) {
    try {
      const { id } = req.params;
      const { order_id, product_id, quantity, price, subtotal } = req.body;
      const result = await updateOrder_itemService(
        id,
        order_id,
        product_id,
        quantity,
        price,
        subtotal
      );
      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
  deleteOrder_item: async function (req, res) {
    try {
      const { id } = req.params;
      const result = await deleteOrder_itemService(id);
      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
};

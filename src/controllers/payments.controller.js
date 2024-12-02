import { statusCodes } from "../config/index.js";
import {
  getAllPaymentsService,
  getPaymentByIdService,
  createPaymentsService,
  updatePaymentsService,
  deletePaymentsService,
} from "../services/index.js";

const ok = statusCodes.ok;
const not_found = statusCodes.not_found;
const medium = statusCodes.medium;
const bad = statusCodes.bad;
const created = statusCodes.created;

export const paymentsController = {
  getAllPayments: async function (req, res) {
    try {
      const result = await getAllPaymentsService();

      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },

  getpaymentById: async function (req, res) {
    try {
      const { id } = req.params;

      const result = await getPaymentByIdService(id);

      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },

  createPayment: async function (req, res) {
    try {
      const { order_id, payment_method, amount, status } = req.body;

      const result = await createPaymentsService({
        order_id,
        payment_method,
        amount,
        status,
      });

      res.status(created).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },

  updatePayment: async function (req, res) {
    try {
      const { id } = req.params;

      const { order_id, payment_method, amount, status } = req.body;

      const result = await updatePaymentsService({
        id,
        order_id,
        payment_method,
        amount,
        status,
      });

      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },

  deletePayment: async function (req, res) {
    try {
      const { id } = req.params;

      const result = await deletePaymentsService(id);

      res.status(ok).send(result);
    } catch (error) {
      res.status(bad).send(error.message);
    }
  },
};

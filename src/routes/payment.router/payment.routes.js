import express from "express";
import { paymentsController } from "../../controllers/index.js";
import {
  checkPaymentDatamiddleware,
  UpdatecheckPaymentDatamiddleware,
} from "../../middlewares/index.js";
import {
  createPaymentValidationSchema,
  updatePaymentValidationSchema,
} from "../../validations/index.js";
import { authGuard, roleGuard } from "../../guards/index.js";

export const paymentRouter = express.Router();

paymentRouter.get("/", authGuard, paymentsController.getAllPayments);
paymentRouter.get("/:id", authGuard, paymentsController.getpaymentById);
paymentRouter.post(
  "/",
  authGuard,
  checkPaymentDatamiddleware(createPaymentValidationSchema),
  paymentsController.createPayment
);
paymentRouter.put(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  UpdatecheckPaymentDatamiddleware(updatePaymentValidationSchema),
  paymentsController.updatePayment
);
paymentRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  paymentsController.deletePayment
);

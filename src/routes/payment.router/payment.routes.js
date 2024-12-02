import express from "express";
import { paymentsController } from "../../controllers/index.js";
import {
  checkPaymentDatamiddleware,
  UpdatecheckPaymentDatamiddleware,
} from "../../middlewares/index.js";
import { paymentValidationSchema } from "../../validations/index.js";
import { authGuard, roleGuard } from "../../Guards/index.js";

export const paymentRouter = express.Router();

paymentRouter.get("/", paymentsController.getAllPayments);
paymentRouter.get("/:id", paymentsController.getpaymentById);
paymentRouter.post(
  "/",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  checkPaymentDatamiddleware(paymentValidationSchema),
  paymentsController.createPayment
);
paymentRouter.put(
  "/:id",
  roleGuard(["user", "admin", "manager"]),
  UpdatecheckPaymentDatamiddleware(paymentValidationSchema),
  paymentsController.updatePayment
);
paymentRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  paymentsController.deletePayment
);

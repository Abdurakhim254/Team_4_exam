import express from "express";
import { authGuard, roleGuard } from "../../Guards/index.js";
import { customerInteractionObj } from "../../controllers/index.js";
import { customerInteractionValidationSchema } from "../../validations/index.js";
import {
  CustomerInteractionDatamiddleware,
  UpdateCustomerInteractionDatamiddleware,
} from "../../middlewares/index.js";

export const customerInteractionRouter = express.Router();

customerInteractionRouter.get(
  "/",
  customerInteractionObj.getAllCustomerInteractionsCon
);
customerInteractionRouter.get(
  "/:id",
  customerInteractionObj.getCustomerInteractionByIdCon
);
customerInteractionRouter.post(
  "/",
  authGuard,
  CustomerInteractionDatamiddleware(customerInteractionValidationSchema),
  customerInteractionObj.createCustomerInteractionCon
);
customerInteractionRouter.put(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  UpdateCustomerInteractionDatamiddleware(customerInteractionValidationSchema),
  customerInteractionObj.updateCustomerInteractionByIdCon
);
customerInteractionRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  customerInteractionObj.deleteCustomerInteractionByIdCon
);

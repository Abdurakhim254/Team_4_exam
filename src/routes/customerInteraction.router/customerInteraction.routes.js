import express from "express";
import { authGuard, roleGuard } from "../../guards/index.js";
import { customerInteractionObj } from "../../controllers/index.js";
import {
  createCustomerInteractionValidationSchema,
  updateCustomerInteractionValidationSchema,
} from "../../validations/index.js";
import {
  CustomerInteractionDatamiddleware,
  UpdateCustomerInteractionDatamiddleware,
} from "../../middlewares/index.js";
import { createCustomerInteractionService } from "../../services/customerInteraction.service.js";

export const customerInteractionRouter = express.Router();

customerInteractionRouter.get(
  "/",
  authGuard,
  customerInteractionObj.getAllCustomerInteractionsCon
);
customerInteractionRouter.get(
  "/:id",
  authGuard,
  customerInteractionObj.getCustomerInteractionByIdCon
);
customerInteractionRouter.post(
  "/",
  authGuard,
  CustomerInteractionDatamiddleware(createCustomerInteractionValidationSchema),
  customerInteractionObj.createCustomerInteractionCon
);
customerInteractionRouter.put(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  UpdateCustomerInteractionDatamiddleware(
    updateCustomerInteractionValidationSchema
  ),
  customerInteractionObj.updateCustomerInteractionByIdCon
);
customerInteractionRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  customerInteractionObj.deleteCustomerInteractionByIdCon
);

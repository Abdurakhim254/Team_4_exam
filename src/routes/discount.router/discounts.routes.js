import express from "express";
import { discountsController } from "../../controllers/index.js";
import {
  CheckdiscountDatamiddleware,
  UpdateCheckdiscountDatamiddleware,
} from "../../middlewares/index.js";
import { discountValidationSchema } from "../../validations/index.js";
import { authGuard, roleGuard } from "../../Guards/index.js";

export const discountRouter = express.Router();

discountRouter.get("/", discountsController.getAllDiscounts);
discountRouter.get("/:id", discountsController.getDiscountsById);
discountRouter.post(
  "/",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  CheckdiscountDatamiddleware(discountValidationSchema),
  discountsController.createDiscount
);
discountRouter.put(
  "/:id",
  roleGuard(["user", "admin", "manager"]),
  UpdateCheckdiscountDatamiddleware(discountValidationSchema),
  discountsController.updateDiscount
);
discountRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  discountsController.deleteDiscount
);

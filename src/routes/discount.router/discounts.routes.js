import express from "express";
import { authGuard, roleGuard } from "../../guards/index.js";
import { discountsController } from "../../controllers/index.js";
import {
  CheckdiscountDatamiddleware,
  UpdateCheckdiscountDatamiddleware,
} from "../../middlewares/index.js";
import { discountValidationSchema } from "../../validations/index.js";

export const discountRouter = express.Router();

discountRouter.get("/", authGuard, discountsController.getAllDiscountsCon);
discountRouter.get("/:id", authGuard, discountsController.getDiscountsByIdCon);
discountRouter.post(
  "/",
  authGuard,
  CheckdiscountDatamiddleware(discountValidationSchema),
  discountsController.createDiscountCon
);
discountRouter.put(
  "/:id",
  roleGuard(["admin", "manager"]),
  UpdateCheckdiscountDatamiddleware(discountValidationSchema),
  discountsController.updateDiscountByIdCon
);
discountRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  discountsController.deleteDiscountByIdCon
);

import express from "express";
import { orderObj } from "../../controllers/index.js";
import { authGuard, roleGuard } from "../../guards/index.js";
import {
  createOrderValidationSchema,
  updateOrderValidationSchema,
} from "../../validations/index.js";
import {
  CheckOrderDatamiddleware,
  UpdateCheckOrderDatamiddleware,
} from "../../middlewares/index.js";

export const orderRouter = express.Router();

orderRouter.get("/", authGuard, orderObj.getAllOrdersCon);
orderRouter.get("/:id", authGuard, orderObj.getOrderByIdCon);
orderRouter.post(
  "/",
  authGuard,
  CheckOrderDatamiddleware(createOrderValidationSchema),
  orderObj.createOrderCon
);
orderRouter.put(
  "/:id",
  authGuard,
  // roleGuard(["admin", "manager"]),
  UpdateCheckOrderDatamiddleware(updateOrderValidationSchema),
  orderObj.updateOrderByIdCon
);
orderRouter.delete(
  "/:id",
  authGuard,
  // roleGuard(["admin", "manager"]),
  orderObj.deleteOrderByIdCon
);

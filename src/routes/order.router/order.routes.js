import express from "express";
import { orderObj } from "../../controllers/index.js";
import { authGuard, roleGuard } from "../../Guards/index.js";
import { orderValidationSchema } from "../../validations/index.js";
import {
  CheckOrderDatamiddleware,
  UpdateCheckOrderDatamiddleware,
} from "../../middlewares/index.js";

export const orderRouter = express.Router();

orderRouter.get("/", orderObj.getAllOrdersCon);
orderRouter.get("/:id", orderObj.getOrderByIdCon);
orderRouter.post(
  "/",
  authGuard,
  CheckOrderDatamiddleware(orderValidationSchema),
  orderObj.createOrderCon
);
orderRouter.put(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  UpdateCheckOrderDatamiddleware(orderValidationSchema),
  orderObj.updateOrderByIdCon
);
orderRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  orderObj.deleteOrderByIdCon
);

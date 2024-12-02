import express from "express";
import { order_itemsController } from "../../controllers/index.js";
import {
  checkOrderItemsDatamiddleware,
  UpdatecheckOrderItemsDatamiddleware,
} from "../../middlewares/index.js";
import { orderItemsValidationSchema } from "../../validations/index.js";
import { authGuard, roleGuard } from "../../Guards/index.js";

export const order_itemsRouter = express.Router();

order_itemsRouter.get("/", order_itemsController.getAllOrder_items);
order_itemsRouter.get("/:id", order_itemsController.getOrder_itemById);
order_itemsRouter.post(
  "/",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  checkOrderItemsDatamiddleware(orderItemsValidationSchema),
  order_itemsController.createOrder_item
);
order_itemsRouter.put(
  "/:id",
  authGuard,
  UpdatecheckOrderItemsDatamiddleware(orderItemsValidationSchema),
  order_itemsController.updateOrder_item
);
order_itemsRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  order_itemsController.deleteOrder_item
);

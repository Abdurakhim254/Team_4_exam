import express from "express";
import {
  addressRouter,
  authRouter,
  customerInteractionRouter,
  customerNoteRouter,
  discountRouter,
  feedbackRouter,
  order_itemsRouter,
  orderRouter,
  paymentRouter,
  productsRouter,
} from "./router.export.js";

export const mainRouter = express.Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/feedback", feedbackRouter);
mainRouter.use("/order", orderRouter);
mainRouter.use("/discount", discountRouter);
mainRouter.use("/address", addressRouter);
mainRouter.use("/customerInteraction", customerInteractionRouter);
mainRouter.use("/order_items", order_itemsRouter);
mainRouter.use("/customerNote", customerNoteRouter);
mainRouter.use("/payment", paymentRouter);
mainRouter.use("/products", productsRouter);

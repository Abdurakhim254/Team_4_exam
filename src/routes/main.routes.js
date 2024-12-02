import express from "express";
import {
  authRouter,
  customerInteractionRouter,
  customerNoteRouter,
  feedbackRouter,
  orderRouter,
} from "./router.export.js";

export const mainRouter = express.Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/feedback", feedbackRouter);
mainRouter.use("/order", orderRouter);
mainRouter.use("/customerInteraction", customerInteractionRouter);
mainRouter.use("/customerNote", customerNoteRouter);

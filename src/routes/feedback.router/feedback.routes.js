import express from "express";
import { feedbackObj } from "../../controllers/index.js";
import { authGuard, roleGuard } from "../../guards/index.js";
import {
  createFeedbackValidationSchema,
  updateFeedbackValidationSchema,
} from "../../validations/index.js";
import {
  checkFeedbackDatamiddleware,
  UpdatecheckFeedbackDatamiddleware,
} from "../../middlewares/index.js";

export const feedbackRouter = express.Router();

feedbackRouter.get("/", authGuard, feedbackObj.getAllFeedbacksCon);
feedbackRouter.get("/:id", authGuard, feedbackObj.getFeedbackByIdCon);
feedbackRouter.post(
  "/",
  authGuard,
  checkFeedbackDatamiddleware(createFeedbackValidationSchema),
  feedbackObj.createFeedbackCon
);
feedbackRouter.put(
  "/:id",
  authGuard,
  // roleGuard(["admin", "manager"]),
  UpdatecheckFeedbackDatamiddleware(updateFeedbackValidationSchema),
  feedbackObj.updateFeedbackByIdCon
);
feedbackRouter.delete(
  "/:id",
  authGuard,
  // roleGuard(["admin", "manager"]),
  feedbackObj.deleteFeedbackByIdCon
);

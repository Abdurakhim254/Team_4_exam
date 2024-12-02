import express from "express";
import { feedbackObj } from "../../controllers/index.js";
import { authGuard, roleGuard } from "../../Guards/index.js";
import {
  feedbackValidationSchema,
  updateFeedbackValidationSchema,
} from "../../validations/index.js";
import {
  checkFeedbackDatamiddleware,
  UpdatecheckFeedbackDatamiddleware,
} from "../../middlewares/index.js";

export const feedbackRouter = express.Router();

feedbackRouter.get("/", feedbackObj.getAllFeedbacksCon);
feedbackRouter.get("/:id", feedbackObj.getFeedbackByIdCon);
feedbackRouter.post(
  "/",
  authGuard,
  checkFeedbackDatamiddleware(feedbackValidationSchema),
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

import express from 'express'
import {feedbackObj} from "../../controllers/index.js"
import {checkFeedbackDatamiddleware,UpdatecheckFeedbackDatamiddleware} from "../../middlewares/index.js"
import {feedbackValidationSchema} from "../../validations/index.js"
import {authGuard,roleGuard} from "../../Guards/index.js"

export const feedbackRouter=express.Router()

feedbackRouter.get("/",feedbackObj.getAllFedbacksCon)
feedbackRouter.get("/:id",feedbackObj.getFedbackByIdCon)
feedbackRouter.post("/",authGuard,roleGuard(['admin','manager']),checkFeedbackDatamiddleware(feedbackValidationSchema),feedbackObj.CreateFedbackCon)
feedbackRouter.put("/:id",authGuard,roleGuard(['admin','manager']),UpdatecheckFeedbackDatamiddleware(feedbackValidationSchema),feedbackObj.UpdateFedbackCon)
feedbackRouter.delete("/:id",authGuard,roleGuard(['admin','manager']),feedbackObj.deleteFedbackCon)
import express from "express"
import {authRouter, feedbackRouter,customerInteractionRouter,customerNoteRouter, orderRouter, userRouter} from "./router.export.js"

export const mainRouter=express.Router()

mainRouter.use("/auth",authRouter)
mainRouter.use("/user",userRouter)
mainRouter.use("/order",orderRouter)
mainRouter.use("/customerInteraction", customerInteractionRouter);
mainRouter.use("/customerNote", customerNoteRouter);
mainRouter.use("/feedback",feedbackRouter)
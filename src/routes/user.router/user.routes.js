import express from 'express'
import {UserObj} from "../../controllers/index.js"
import {authGuard,roleGuard} from "../../Guards/index.js"

export const userRouter=express.Router()

userRouter.get("/",UserObj.getAlluserscon)
userRouter.get("/:email",UserObj.getUserByemailcon)
userRouter.post("/",authGuard,roleGuard(['admin','manager']),UserObj.createUsercon)
userRouter.put("/",authGuard,roleGuard(['admin','manager']),UserObj.updateUsercon)
userRouter.delete("/:email",authGuard,roleGuard(['admin','manager']),UserObj.deleteUsercon)
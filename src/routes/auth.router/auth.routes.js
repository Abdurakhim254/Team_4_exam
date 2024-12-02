import express from "express"
import {AuthObj} from "../../controllers/index.js"
import {AuthDatamiddleware,AuthLoginmiddleware} from "../../middlewares/index.js"
import {authRegisterValidationSchema,authLoginValidationSchema} from "../../validations/index.js"
export const authRouter=express.Router()

authRouter.post("/signUp",AuthDatamiddleware(authRegisterValidationSchema),AuthObj.RegisterCon)
authRouter.post("/signIn",AuthLoginmiddleware(authLoginValidationSchema),AuthObj.LoginCon)
authRouter.get("/me",AuthObj.ProfileCon)
authRouter.post("/verify-otp",AuthObj.VerifyCon)
authRouter.post("/send-otp",AuthObj.SendOtpCon)
authRouter.get("/logout",AuthObj.LogOutCon)
authRouter.post("/refresh-token",AuthObj.RefreshTokenCon)
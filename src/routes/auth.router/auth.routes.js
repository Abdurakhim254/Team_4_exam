import express from "express";
import { authObj } from "../../controllers/index.js";
import {
  AuthDatamiddleware,
  AuthLoginmiddleware,
} from "../../middlewares/index.js";
import {
  authRegisterValidationSchema,
  authLoginValidationSchema,
} from "../../validations/index.js";

export const authRouter = express.Router();

authRouter.get("/all", authObj.getAllCutomersCon);
authRouter.get("/me", authObj.profileCon);
authRouter.get("/logout", authObj.logOutCon);
authRouter.post(
  "/signUp",
  AuthDatamiddleware(authRegisterValidationSchema),
  authObj.registerCon
);
authRouter.post(
  "/signIn",
  AuthLoginmiddleware(authLoginValidationSchema),
  authObj.loginCon
);
authRouter.post("/verify-otp", authObj.verifyCon);
authRouter.post("/send-otp", authObj.sendOtpCon);
authRouter.post("/refresh-token", authObj.refreshTokenCon);

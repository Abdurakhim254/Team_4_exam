import express from "express";
import { addressObj } from "../../controllers/index.js";
import {
  CheckAddressDatamiddleware,
  UpdateAddressDatamiddleware,
} from "../../middlewares/index.js";
import { addressValidationSchema } from "../../validations/index.js";
import { authGuard, roleGuard } from "../../guards/index.js";

export const addressRouter = express.Router();

addressRouter.get("/", authGuard, addressObj.getAlladdress);
addressRouter.get("/:id", authGuard, addressObj.getAdressById);
addressRouter.post(
  "/",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  CheckAddressDatamiddleware(addressValidationSchema),
  addressObj.createAddress
);
addressRouter.put(
  "/:id",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  UpdateAddressDatamiddleware(addressValidationSchema),
  addressObj.updateAddress
);
addressRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  addressObj.deleteAddress
);

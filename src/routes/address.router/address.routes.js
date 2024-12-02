import express from "express";
import { addressController } from "../../controllers/index.js";
import {
  CheckAddressDatamiddleware,
  UpdateAddressDatamiddleware,
} from "../../middlewares/index.js";
import { addressValidationSchema } from "../../validations/index.js";
import { authGuard, roleGuard } from "../../Guards/index.js";

export const addressRouter = express.Router();

addressRouter.get("/", addressController.getAlladdress);
addressRouter.get("/:id", addressController.getAdressById);
addressRouter.post(
  "/",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  CheckAddressDatamiddleware(addressValidationSchema),
  addressController.createAddress
);
addressRouter.put(
  "/:id",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  UpdateAddressDatamiddleware(addressValidationSchema),
  addressController.updateAddress
);
addressRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  addressController.deleteAddress
);

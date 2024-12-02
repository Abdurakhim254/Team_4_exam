import express from "express";
import { productsConttroller } from "../../controllers/index.js";
import {
  checkProductDatamiddleare,
  UpdatecheckProductDatamiddleare,
} from "../../middlewares/index.js";
import { productValidationSchema } from "../../validations/index.js";
import { authGuard, roleGuard } from "../../guards/index.js";

export const productsRouter = express.Router();

productsRouter.get("/", authGuard, productsConttroller.getAllProducts);
productsRouter.get("/:id", authGuard, productsConttroller.getProductById);
productsRouter.post(
  "/",
  authGuard,
  checkProductDatamiddleare(productValidationSchema),
  productsConttroller.createProduct
);
productsRouter.put(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  UpdatecheckProductDatamiddleare(productValidationSchema),
  productsConttroller.updateProduct
);
productsRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  productsConttroller.deleteProduct
);

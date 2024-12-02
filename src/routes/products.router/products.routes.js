import express from "express";
import { productsConttroller } from "../../controllers/index.js";
import {
  checkProductDatamiddleare,
  UpdatecheckProductDatamiddleare,
} from "../../middlewares/index.js";
import { ProductValidationSchema } from "../../validations/index.js";
import { authGuard, roleGuard } from "../../Guards/index.js";

export const productsRouter = express.Router();

productsRouter.get("/", productsConttroller.getAllProducts);
productsRouter.get("/:id", productsConttroller.getProductById);
productsRouter.post(
  "/",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  checkProductDatamiddleare(ProductValidationSchema),
  productsConttroller.createProduct
);
productsRouter.put(
  "/:id",
  roleGuard(["user", "admin", "manager"]),
  UpdatecheckProductDatamiddleare(ProductValidationSchema),
  productsConttroller.updateProduct
);
productsRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["user", "admin", "manager"]),
  productsConttroller.deleteProduct
);

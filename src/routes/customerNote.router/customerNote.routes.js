import express from "express";
import { customerNoteObj } from "../../controllers/index.js";
import { authGuard, roleGuard } from "../../Guards/index.js";
import { customerNotesValidationSchema } from "../../validations/index.js";
import {
  CheckCustomerNotesDatamiddleware,
  UpdateCheckCustomerNotesDatamiddleware,
} from "../../middlewares/index.js";

export const customerNoteRouter = express.Router();

customerNoteRouter.get("/", customerNoteObj.getAllCustomerNotesCon);
customerNoteRouter.get("/:id", customerNoteObj.getCustomerNoteByIdCon);
customerNoteRouter.post(
  "/",
  authGuard,roleGuard(["admin", "manager"]),
  CheckCustomerNotesDatamiddleware(customerNotesValidationSchema),
  customerNoteObj.createCustomerNoteCon
);
customerNoteRouter.put(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  UpdateCheckCustomerNotesDatamiddleware(customerNotesValidationSchema),
  customerNoteObj.updateCustomerNoteByIdCon
);
customerNoteRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  customerNoteObj.deleteCustomerNoteByIdCon
);

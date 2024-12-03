import express from "express";
import { customerNoteObj } from "../../controllers/index.js";
import { authGuard, roleGuard } from "../../guards/index.js";
import {
  createCustomerNotesValidationSchema,
  updateCustomerNotesValidationSchema,
} from "../../validations/index.js";
import {
  CheckCustomerNotesDatamiddleware,
  UpdateCheckCustomerNotesDatamiddleware,
} from "../../middlewares/index.js";

export const customerNoteRouter = express.Router();

customerNoteRouter.get("/", authGuard, customerNoteObj.getAllCustomerNotesCon);
customerNoteRouter.get(
  "/:id",
  authGuard,
  customerNoteObj.getCustomerNoteByIdCon
);
customerNoteRouter.post(
  "/",
  authGuard,
  CheckCustomerNotesDatamiddleware(createCustomerNotesValidationSchema),
  customerNoteObj.createCustomerNoteCon
);
customerNoteRouter.put(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  UpdateCheckCustomerNotesDatamiddleware(updateCustomerNotesValidationSchema),
  customerNoteObj.updateCustomerNoteByIdCon
);
customerNoteRouter.delete(
  "/:id",
  authGuard,
  roleGuard(["admin", "manager"]),
  customerNoteObj.deleteCustomerNoteByIdCon
);

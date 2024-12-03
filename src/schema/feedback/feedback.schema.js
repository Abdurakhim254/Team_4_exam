import { logger } from "../../utils/index.js";
import { connection } from "../../database/index.js";

export const createFeedbackTable = async () => {
  try {
    if (!(await connection.schema.hasTable("feedback"))) {
      await connection.schema.createTable("feedback", (table) => {
        table.uuid("id").primary();
        table
          .uuid("customer_id")
          .references("id")
          .inTable("customer")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
          .notNullable();
        table.date("submitted_at").defaultTo(connection.fn.now());
        table.enu("feedback_type", ["complaint", "suggestion", "praise"]);
        table.string("content").notNullable();
      });
      logger.info("Table yaratildi");
    } else {
      logger.info("Table allaqachon yaratilgan");
    }
  } catch (error) {
    return error;
  }
};

import { logger } from "../../utils/index.js";
import { connection } from "../../database/index.js";

export const createCustomNotestTable = async () => {
  try {
    if (!(await connection.schema.hasTable("customer_notes"))) {
      await connection.schema.createTable("customer_notes", (table) => {
        table.uuid("id").primary();
        table
          .uuid("customer_id")
          .references("id")
          .inTable("customer")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
          .notNullable();
        table.string("content").notNullable();
        table.timestamp("created_at").defaultTo(connection.fn.now());
      });
      logger.info("Table yaratildi");
    } else {
      logger.info("Table allaqachon yaratilgan");
    }
  } catch (error) {
    return error;
  }
};

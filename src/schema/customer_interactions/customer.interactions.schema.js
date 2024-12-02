import { logger } from "../../utils/index.js";
import { connection } from "../../database/index.js";

export const createCustomerInteractionsTable = async () => {
  try {
    if (!(await connection.schema.hasTable("customer_interactions"))) {
      await connection.schema.createTable("customer_interactions", (table) => {
        table.uuid("id").primary(),
          table
            .uuid("customer_id")
            .references("id")
            .inTable("customer")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNullable();
        table.enu("type", ["email", "call", "meeting"]);
        table.string("notes").notNullable();
        table.timestamp("interaction_date").defaultTo(connection.fn.now());
      });
      logger.info("Table yaratildi");
    } else {
      logger.info("Table allaqachon yaratilgan");
    }
  } catch (error) {
    return error;
  }
};

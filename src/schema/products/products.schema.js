import { connection } from "../../Database/index.js";
import { logger } from "../../utils/logger/logger.js";

export const createProductTable = async () => {
  try {
    if (!(await connection.schema.hasTable("products"))) {
      await connection.schema.createTable("products", (table) => {
        table.uuid("id").primary(),
          table
            .uuid("customer_id")
            .references("id")
            .inTable("customer")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNullable(),
          table.string("name").notNullable(),
          table.string("description").notNullable(),
          table.integer("price").notNullable(),
          table.integer("stock").notNullable();
      });
      logger.info("Table yaratildi");
    } else {
      logger.info("Table allaqachon yaratilgan");
    }
  } catch (error) {
    logger.error(error.message);
  }
};

import { connection } from "../../Database/index.js";
import { logger } from "../../utils/logger/logger.js";

export const createDiscounttTable = async () => {
  try {
    if (!(await connection.schema.hasTable("discount"))) {
      await connection.schema.createTable("discount", (table) => {
        table.uuid("id").primary(),
          table
            .uuid("product_id")
            .references("id")
            .inTable("products")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNullable(),
          table.string("code").notNullable(),
          table.enu("discount_type", ["percentage", "fixed_amount"]),
          table.date("expiration_date").defaultTo(connection.fn.now());
      });
      logger.info("Table yaratildi");
    } else {
      logger.info("Table allaqachon yaratilgan");
    }
  } catch (error) {
    logger.error(error.message);
  }
};

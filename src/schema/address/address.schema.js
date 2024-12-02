import { connection } from "../../Database/index.js";
import { logger } from "../../utils/logger/logger.js";

export const createAddressTable = async () => {
  try {
    if (!(await connection.schema.hasTable("address"))) {
      await connection.schema.createTable("address", (table) => {
        table.uuid("id").primary,
          table
            .uuid("customer_id")
            .references("id")
            .inTable("customer")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
            .notNullable(),
          table.enu("address_type", ["billing", "shipping"]),
          table.string("address_line_1").notNullable(),
          table.string("address_line_2").notNullable(),
          table.string("city").notNullable(),
          table.string("state").notNullable(),
          table.string("zip_code").notNullable(),
          table.string("country").notNullable();
      });
      logger.info("Table yaratildi");
    } else {
      logger.info("Table allaqachon yaratilgan");
    }
  } catch (error) {
    logger.error(error.message);
  }
};

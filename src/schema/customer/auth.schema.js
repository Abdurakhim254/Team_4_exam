import { connection } from "../../Database/index.js";
import {logger} from "../../utils/logger/logger.js"

export const createCustomerTable = async () => {
  try {
    if (!(await connection.schema.hasTable("customer"))) {
      await connection.schema.createTable("customer", (table) => {
        table.uuid("id").primary(),
          table.string("first_name").notNullable(),
          table.string("last_name").notNullable(),
          table.string("email").unique().notNullable(),
          table.string("password"),
          table.enu("role", ["user", "admin", "manager"]).defaultTo("user"),
          table.boolean("is_active").defaultTo("false").notNullable(),
          table.string("phone"),
          table.date("date_of_birth"),
          table.timestamp("created_at").defaultTo(connection.fn.now()),
          table.timestamp("updated_at").defaultTo(connection.fn.now());
      });
      logger.info("Table yaratildi");
    } else {
      logger.info("Table allaqachon yaratilgan");
    }
  } catch (error) {
    logger.error(error.message);
  }
};




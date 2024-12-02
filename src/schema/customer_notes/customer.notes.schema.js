import { connection } from "../../Database/index.js";
import {logger} from "../../utils/logger/logger.js"

export const createCustomNotestTable = async () => {
    try {
      if (!(await connection.schema.hasTable("custom_notes"))) {
        await connection.schema.createTable("custom_notes", (table) => {
          table.uuid("id").primary(),
          table.uuid('customer_id').references('id').inTable('customer').onDelete("CASCADE").onUpdate("CASCADE").notNullable(),
          table.timestamp('created_at').defaultTo(connection.fn.now()),
          table.string('content').notNullable()
        });
        logger.info("Table yaratildi");
      } else {
        logger.info("Table allaqachon yaratilgan");
      }
    } catch (error) {
      logger.error(error.message);
    }
  };
  


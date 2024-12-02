import { connection } from "../../Database/index.js";
import {logger} from "../../utils/logger/logger.js"


export const createOrdersTable = async () => {
    try {
      if (!(await connection.schema.hasTable("orders"))) {
        await connection.schema.createTable("orders", (table) => {
          table.uuid("id").primary(),
          table.uuid("customer_id").references("id").inTable('customer').onDelete("CASCADE").onUpdate("CASCADE").notNullable(),
          table.timestamp('order_date').defaultTo(connection.fn.now()),
          table.enu('status',['pending', 'shipped', 'delivered', 'cancelled']),
          table.integer('total_amount').notNullable()
        });
        logger.info("Table yaratildi");
      } else {
        logger.info("Table allaqachon yaratilgan");
      }
    } catch (error) {
      logger.error(error.message);
    }
  };
  


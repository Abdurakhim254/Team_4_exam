import { connection } from "../../Database/index.js";
import {logger} from "../../utils/logger/logger.js"

export const createOrder_itemsTable = async () => {
    try {
      if (!(await connection.schema.hasTable("order_items"))) {
        await connection.schema.createTable("order_items", (table) => {
          table.uuid("id").primary(),
          table.uuid('order_id').references('id').inTable('orders').onDelete("CASCADE").onUpdate("CASCADE").notNullable(),
          table.uuid('product_id').references('id').inTable('products').onDelete("CASCADE").onUpdate("CASCADE").notNullable(),
          table.integer('quantity').notNullable(),
          table.integer('price').notNullable(),
          table.integer('subtotal').notNullable()
        });
        logger.info("Table yaratildi");
      } else {
        logger.info("Table allaqachon yaratilgan");
      }
    } catch (error) {
      logger.error(error.message);
    }
  };
  

import { logger } from "../../utils/index.js";
import { connection } from "../../Database/index.js";

export const createOtpPasswordTable = async () => {
  try {
    if (!(await connection.schema.hasTable("otp"))) {
      await connection.schema.createTable("otp", (table) => {
        table.increments("id").primary(), table.string("otp").notNullable();
      });
      logger.info("Table yaratildi");
    } else {
      logger.info("Table allaqachon yaratilgan");
    }
  } catch (error) {
    return error;
  }
};

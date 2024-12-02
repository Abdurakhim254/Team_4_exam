import { connection } from "../../Database/index.js";
import {logger} from "../../utils/logger/logger.js"

export const createOtpPasswordTable=async()=>{
    try {
        if(!(await connection.schema.hasTable('otp'))){
            await connection.schema.createTable('otp',(table)=>{
                table.increments('id').primary(),
                table.string('otp').notNullable()
            })
            logger.info("Table yaratildi")
        }else{
            logger.info("Table allaqachon yaratilgan")
        }
    } catch (error) {
        logger.error(error.message)
    }
}

import {connection} from "../Database/index.js"
import {logger} from "../utils/logger/logger.js"

export const SaveOtp=async(otp)=>{
    try {
        await connection('otp').insert({otp})
        logger.info("Otp saved")
    } catch (error) {
        logger.error(error.message)
    }
}

export const findByotp=async(otp)=>{
    try {
        const res=await connection.select("*").from('otp').where({otp})
        if(res.length>=1){
            return res
        }else{
            return "Otp topilmadi"
        }
    } catch (error) {
        return error.message
    }
}


export const deleteOtp=async(otp)=>{
    try {
        const res=await connection.select("*").from('otp').where({otp}).returning("*").del()
        if(res.length>=1){
            return "Otp o'chirildi"
        }else{
            return "Otp topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

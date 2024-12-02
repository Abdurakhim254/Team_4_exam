import { connection } from "../Database/index.js";

export const findByemail=async(email)=>{
    try {
        const res=await connection.select("*").table('customer').where({email})
        if(res.length>=1){
            return res
        }else{
            return "Ro'yxatdan o'tishingiz kerak"
        }
    } catch (error) {
        return error.message
    }
}

export const deleteByemail=async(email)=>{
    try {
        const res=await connection.select("*").table('customer').where({email})
        if(res.length>=1){
            await connection.select("*").table('customer').where({email}).del()
            return "Akkauntdan Chiqildi"
        }else{
            return "O'chiriladigan foydalanuvchi topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const activateUseraccount=async(email)=>{
    try {
        const is_active=true
        const res=await connection.select("*").from('customer').where({email}).update({is_active}).returning("*")
        if(res.length>=1){
            return "Akkount Aktivlashtirildi"
        }else{
            return "Aktivlashtiriladigan akkount topilmadi"
        }
    } catch (error) {
        return error.message
    }
}
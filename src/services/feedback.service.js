import {connection} from "../Database/index.js"
import { id } from "../helpers/index.js"

export const getAllfeedBackService=async()=>{
    try {
        const res=await connection.select("*").from("feedback")
        if(res.length>=1){
            return res
        }
        return "Feedbacklar topilmadi"
    } catch (error) {
        return error.message
    }
}

export const getfeedBackByidService=async(id)=>{
    try {
        const res=await connection.select("*").from("feedback").where({id})
        if(res.length>=1){
            return res
        }
        return "Feedback Topilmadi"
    } catch (error) {
        return error.message
    }
}

export const createFeedbackService=async({customer_id,submitted_at,feedback_type,content})=>{
    try {
        await connection('feedback').insert({id,customer_id,submitted_at,feedback_type,content})
        return "Feedback yaratildi"
    } catch (error) {
        return error.message
    }
}

export const UpdatefeedbackService=async({id,customer_id,submitted_at,feedback_type,content})=>{
    try {
        const result=await connection.select("*").from("feedback").where({id})
        if(result.length>=1){
            await connection.select("*").from("feedback").where({id}).update({customer_id,submitted_at,feedback_type,content})
            return "Feddback Yangilandi"
        }else{
            return "Yangilanadigan feedback topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const deletefeedbackService=async(id)=>{
    try {
        const result=await connection.select("*").table("feedback").where({id}).del().returning("*")
        if(result.length>=1){
            return "Feedback o'chirildi"
        }else{
            return "O'chiriladigan feedback topilmadi"
        }
    } catch (error) {
        return error.message
    }
}
import {statusCodes} from "../config/index.js"

export const CheckOrderDatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {customer_id,order_date,status,total_amount}=req.body
        const {error}=schema.validate({customer_id,order_date,status,total_amount})
        if(error){
            return res.status(statusCodes.bad).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}


export const UpdateCheckOrderDatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {id}=req.params
        const {customer_id,order_date,status,total_amount}=req.body
        const {error}=schema.validate({id,customer_id,order_date,status,total_amount})
        if(error){
            return res.status(statusCodes.bad).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}
import {statusCodes} from "../config/index.js"

export const checkOrderItemsDatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {order_id,customer_id,product_id,quantity,price,subtotal}=req.body
        const {error}=schema.validate({order_id,customer_id,product_id,quantity,price,subtotal})
        if(error){
            return res.status(statusCodes.bad).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}


export const UpdatecheckOrderItemsDatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {id}=req.params
        const {order_id,product_id,customer_id,quantity,price,subtotal}=req.body
        const {error}=schema.validate({id,order_id,customer_id,product_id,quantity,price,subtotal})
        if(error){
            return res.status(statusCodes.bad).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

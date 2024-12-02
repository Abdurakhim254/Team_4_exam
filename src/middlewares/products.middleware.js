import {statusCodes} from "../config/index.js"

export const checkProductDatamiddleare=(schema)=>{
    return (req,res,next)=>{
        const {name,description,price,stock}=req.body
        const {error}=schema.validate({name,description,price,stock})
        if(error){
            return res.status(statusCodes.bad).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

export const UpdatecheckProductDatamiddleare=(schema)=>{
    return (req,res,next)=>{
        const {id}=req.params
        const {name,description,price,stock}=req.body
        const {error}=schema.validate({id,name,description,price,stock})
        if(error){
            return res.status(statusCodes.bad).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}
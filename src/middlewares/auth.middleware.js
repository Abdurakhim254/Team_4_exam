import { statusCodes } from "../config/index.js"

export const AuthDatamiddleware=(schema)=>{
    return (req,res,next)=>{
        const {first_name,last_name,email,password,role,phone,date_of_birth,created_at,updated_at}=req.body
        const {error}=schema.validate({first_name,last_name,email,password,role,phone,date_of_birth,created_at,updated_at})
        if(error){
            res.status(statusCodes.bad).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}

export const AuthLoginmiddleware=(schema)=>{
    return (req,res,next)=>{
        const {email,password}=req.body
        const {error}=schema.validate({email,password})
        if(error){
            res.status(statusCodes.bad).send("Ma'lumot to'liqmas")
        }else{
            next()
        }
    }
}
export const knjk=8
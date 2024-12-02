import {jwt_info} from "../config/index.js"
import jwt from "jsonwebtoken"

export const authGuard=(req,res,next)=>{
    const [type,token]=req.headers.authorization.split(" ")

    const secretkey=jwt_info.secretkey
    if(!type=='Bearer' || !token){
        res.status(404).send("Ro'yxatdan o'tishingiz kerak")
    }
    jwt.verify(token,secretkey,(error,decode)=>{
        if(error){
            return res.status(400).send(error).message
        }
        req.user=decode
    })
    next()
}
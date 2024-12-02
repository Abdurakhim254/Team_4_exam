import jwt from "jsonwebtoken";
import {jwt_info} from "../config/index.js"

export const createAccesstoken=(email,role)=>{
    try {
        const secretkey=jwt_info.secretkey
        const expiresIn=jwt_info.expiresIn
        const payload={email,role}
        const token=jwt.sign(payload,secretkey,{expiresIn}) 
        return token       
    } catch (error) {
       return error.message
    }
}
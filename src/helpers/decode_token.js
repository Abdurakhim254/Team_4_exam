import jwt from "jsonwebtoken"
import {jwt_info} from "../config/index.js"

const secretkey=jwt_info.secretkey

export const decode_jwt=async(token)=>{
    try {
        let email=""
        jwt.verify(token,secretkey,(err,decode)=>{
            if(err){
                return err.message
            }
            email=decode.email
        })
        return email
    } catch (error) {
        return error.message
    }
}
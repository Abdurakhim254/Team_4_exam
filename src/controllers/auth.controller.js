import {statusCodes} from "../config/index.js"
import {authRegisterService,authLoginService,profileService,RefreshtokenService,logOutService,authVerifyService, SendOtpService} from "../services/index.js"

const ok=statusCodes.ok
const not_found=statusCodes.not_found
const medium=statusCodes.medium
const bad=statusCodes.bad
const created=statusCodes.created

export const AuthObj={
    RegisterCon:async function(req,res){
        try {
            const {first_name,last_name,email,password,role,phone,date_of_birth,created_at,updated_at}=req.body
            const result=await authRegisterService({first_name,last_name,email,password,role,phone,date_of_birth,created_at,updated_at})
            res.status(created).send(result)
        } catch (error) {
            res.status(bad).send(error.message)
        }
    },
    LoginCon:async function(req,res){
        try {
            const {email,password}=req.body
            const result=await authLoginService({email,password})
            res.status(ok).send(result)
        } catch (error) {
            res.status(bad).send(error.message)
        }
    },
    ProfileCon:async function(req,res){
        try {
            const [type,token]=req.headers.authorization.split(" ")
            const result=await profileService([type,token])
            
            res.status(ok).send(result)
        } catch (error) {
            res.status(bad).send(error.message)
        }
    },

    SendOtpCon:async function(req,res){
        try {
            const {email}=req.body
            const result=await SendOtpService(email)
            res.status(ok).send(result)
        } catch (error) {
            res.status(bad).send(error.message)
        }
    }
    ,
    VerifyCon:async function(req,res){
        try {
            const {otp,email}=req.body
            const result=await authVerifyService({otp,email})
            res.status(ok).send(result)
        } catch (error) {
            res.status(bad).send(error.message)
        }
    },
    LogOutCon:async function(req,res){
        try {
            const [type,token]=req.headers.authorization.split(" ")
            const result=await logOutService([type,token])
            res.status(ok).send(result)
        } catch (error) {
            res.status(bad).send(error.message)
        }
    },
    RefreshTokenCon:async function(req,res){
        try {
          const [type,token]=req.headers.authorization.split(" ")
          const result=await RefreshtokenService([type,token])
            res.status(ok).send(result)
        } catch (error) {
            res.status(bad).send(error.message)
        }

    }
}
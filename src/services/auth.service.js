import { connection } from "../Database/index.js";
import { hashshpassword } from "../utils/hash/hashspassword.js";
import { comparepassword } from "../utils/compare/compare.password.js";
import { createAccesstoken } from "../helpers/index.js";
import { findByemail,deleteByemail,activateUseraccount,UpdateUserPassword } from "./index.js";
import {decode_jwt} from "../helpers/index.js"
import { id } from "../helpers/index.js";
import {sendMail} from "../utils/sendOtp/send.mail.js"
import {otp} from "../utils/otp/otp.generator.js"
import { findByotp,SaveOtp,deleteOtp } from "./Otp.service.js";



export const authRegisterService = async ({first_name,last_name,email,password, role,phone,date_of_birth,created_at,updated_at}) => {
  try {
    if (role || created_at || updated_at) {
      var data = {first_name,last_name,email,password,role,phone,date_of_birth,created_at,updated_at,};
    } else {
      var data = {first_name,last_name,email,password,phone,date_of_birth};
    }
    const result = await connection.select("*").table("customer").where({ email });
    if (result.length >= 1) {
      return "Foydalanuvchi allaqachon ro'yxatdan o'tgan";
    } else {
      data.password = await hashshpassword(data.password);
      data.id = id;
      await connection("customer").insert(data);
      await sendMail(email,otp)
      await SaveOtp(otp)
      return "Ro'yxatdan o'tdingiz";
    }
  } catch (error) {
    return error.message;
  }
};

export const authLoginService = async ({ email, password }) => {
  try {
    const result = await connection.select("*").table("customer").where({ email }).returning("*");
    if (result.length >= 1) {
      const isequal = await comparepassword(password, result[0].password);
      if (isequal) {
        if(result[0].is_active){
          const accessToken = await createAccesstoken(email, result[0].role);
          delete result[0].password;
          return { result, accessToken };
        }else{
          return "Account statusi active emas"
        }
      } else {
        return "Ro'yxatdan o'tishingiz kerak";
      }
    } else {
      return "Ro'yxatdan o'tishingiz kerak";
    }
  } catch (error) {
    return error.message;
  }
};

export const authVerifyService=async({otp,email})=>{
  try {
   const res=await findByemail(email)
   if(res[0].is_active){
    return "Account Statusingiz Joyida"
  }else{
     const otpData=await findByotp(otp)
     if(otpData.length==1){
      await activateUseraccount(email)
      await deleteOtp(otp)
      return "Account Activlashtirildi"
     }else{
      return "Otp Password xato"
     }
   }
  } catch (error) {
    return error.message
  }
}

export const SendOtpService=async(email)=>{
  try {
    await sendMail(email,otp)
    await SaveOtp(otp)
    return "Emailingizga qarang"
  } catch (error) {
    return error.message
  }
}

export const forgetPasswordService=async({email,password,otp})=>{
  try {
    const userdata=await findByemail(email)
    if(userdata.length>=1){
      const otpData=await findByotp(otp)
      if(otpData.length==1){
        const hashshedpassword=await hashshpassword(password)
        await deleteOtp(otp)  
        const data=await UpdateUserPassword(email,hashshedpassword)
        return data
      }else{
        return "Otp password xato"
      }
    }else{
      return "Password almashtirilishi kerak bo'lgan account topilmadi"
    }

  } catch (error) {
    return error.message
  }
}

export const profileService=async([type,token])=>{
  try {
    if(!type=='Bearer' || !token){
      return "Unauthorization"
    }
    const email=await decode_jwt(token)
    const result=await findByemail(email)
    return result
  } catch (error) {
    return error.message
  }
}

export const RefreshtokenService=async([type,token])=>{
  try {
    if(!type=='Bearer' || !token){
      return "Unauthorization"
    }
    const email =await decode_jwt(token)
    const data=await findByemail(email)
    const refReshtoken=token
    const role=data[0].role
    const accessToken=createAccesstoken(email,role)
    return {accessToken,refReshtoken}
  } catch (error) {
    return error.message
  }
}


export const logOutService=async([type,token])=>{
  try {
    if(!type=='Bearer' || !token){
      return "Unauthorization"
    }
    const email=await decode_jwt(token)
    const result=await deleteByemail(email)
    return  result  
  } catch (error) {
    return error.message
  }
}
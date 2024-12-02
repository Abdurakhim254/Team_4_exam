import nodemailer from "nodemailer"
import { email_info} from "../../config/index.js"


const transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:email_info.user,
        pass:email_info.pass
    }
})

export const sendMail=async(email,otp)=>{
    try {
        transport.sendMail({
            from:email_info.user,
            to:email,
            subject:'OTP',
            text:`Sizning otp passwordingiz ${otp}`
        },
        function(error,info){
            if(error){
                console.error(error.message);
            }else{
                console.log(info)
            }
        }
        )
    } catch (error) {
        console.error(error.message)
    }
}
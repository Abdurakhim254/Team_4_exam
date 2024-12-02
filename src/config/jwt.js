import dotenv from 'dotenv'

dotenv.config()

export const jwt_info={
    secretkey:process.env.SECRETKEY,
    expiresIn:process.env.EXPIRESIN
}

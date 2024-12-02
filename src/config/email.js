import dotenv from 'dotenv'

dotenv.config()

export const email_info={
    user:process.env.USER,
    pass:process.env.PASS
}
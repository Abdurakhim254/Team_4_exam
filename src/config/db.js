import dotenv from 'dotenv'

dotenv.config()

export const db={
    port:process.env.DB_PORT,
    client:process.env.CLIENT,
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    user:process.env.DB_USER,
    database:process.env.DB_NAME
}


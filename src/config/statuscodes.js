import dotenv from "dotenv"
dotenv.config()

export const statusCodes={
    ok:process.env.OK,
    not_found:process.env.NOT_FOUND,
    created:process.env.CREATED,
    bad:process.env.BAD,
    medium:process.env.MEDIUM,
}
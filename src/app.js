import express from "express"
import helmet from "helmet"
import rateLimit from "express-rate-limit"
import {mainRouter} from "./routes/index.js"
import {statusCodes} from "./config/index.js"
import {createAlltables} from "./schema/index.js"

export const app=express()

const limitter=rateLimit({
    windowMs:15*60*1000,
    limit:50
})

app.use(express.json())


app.use(helmet())
app.use(limitter)

app.get("/api/v1/setup",async(req,res)=>{
    try {
        await createAlltables()
        res.status(statusCodes.created).send("Tablelar yaratildi")
    } catch (error) {
        res.status(statusCodes.bad).send(error.message)
    }
})

app.use("/api/v1",mainRouter)

app.use((req,res)=>{
    res.status(statusCodes.not_found).send("Not Found")
})
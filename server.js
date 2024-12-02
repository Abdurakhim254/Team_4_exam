import { app } from "./src/app.js";
import { application } from "./src/config/index.js";

const port=application.port


process.on('uncaughtException', (err) => {
    logger.error('Uncaught Exception', err)
    process.exit(1)
})

process.on("unhandledRejection", (reason, promise) => {
    logger.error('Unhandled Rejection at', promise, 'reason', reason)
    process.exit(1)
})


const serverstart=async()=>{
    try {
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`)
        })        
    } catch (error) {
        console.error(error.message)
    }
}
await serverstart()

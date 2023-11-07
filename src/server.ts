import "reflect-metadata"
import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import { AppDataSource } from "./database/data-source"
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.SERVER_PORT
AppDataSource.initialize().then(async()=>{
    console.log("Db OK")
    app.listen(port,()=>console.log(`Server is listening on ${port}`))
})
import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreatePoints1699381651078 } from "./migrations/1699381651078-CreatePoints"
import * as dotenv from "dotenv"
dotenv.config()
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [ CreatePoints1699381651078 ],
    subscribers: [],
})

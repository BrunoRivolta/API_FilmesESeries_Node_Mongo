import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGO_ENV)

let db = mongoose.connection

export default db


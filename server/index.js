import express from 'express'
import mongoose from 'mongoose'
import postRouter from './routers/postRouter.js'
import commentRouter from './routers/commentRouter.js'
import corsMiddleware from './middleware/cors.middleware.js'
import dotenv from "dotenv"
dotenv.config()

const PORT = 4000;
const DB_URL = 'mongodb+srv://root:root@cluster0.swnvp.mongodb.net/gbDB?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(corsMiddleware)
app.use('/api', postRouter)
app.use('/api', commentRouter)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log(`server was started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

startApp()
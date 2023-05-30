import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { collection, ObjectId } from './databases/mongodb.js'
import { router } from './src/routes/dashboard.js'

// ==== Configuration
dotenv.config()
const PORT = process.env.PORT
const app = express()
const corsOption = {
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200,
}

// ==== Global middleware
app.use(cors(corsOption))
app.use(express.json())
app.use(router)

// ===== Routes ===== //
app.get('/', (req, res) => {})

app.get('/tag', (req, res) => {})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

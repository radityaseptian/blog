import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { collection, ObjectId } from './databases/mongodb.js'
import { router } from './src/routes/dashboard.js'

// ==== Configuration
dotenv.config()
const app = express()
const corsOption = {
  origin: process.env.ORIGIN,
  optionsSuccessStatus: 200,
}

// ==== Global middleware
app.use(cors(corsOption))
app.use(express.json())

// ===== Routes ===== //
app.get('/', (req, res) => {

})

app.get('/tag', (req, res) => {
  
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

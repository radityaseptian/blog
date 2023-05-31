import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
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
app.use(cookieParser())
app.use(router)

// ===== Routes ===== //
app.get('/', (req, res) => {
  try {
    collection
      .find()
      .limit(12)
      .sort({ _id: -1 })
      .toArray()
      .then((result) => {
        res.json(result).status(200)
      })
  } catch (err) {
    res.status(500).json({
      message: err,
    })
  }
})

app.get('/article', (req, res) => {
  const count = req.query.page * 12
  try {
    collection
      .find()
      .skip(count)
      .limit(12)
      .sort({ _id: -1 })
      .toArray()
      .then((result) => {
        res.status(200).json(result)
      })
  } catch (err) {
    res.status(500).json({
      message: err,
    })
  }
})

app.get('/article/:id', (req, res) => {
  const id = req.params.id
  try {
    collection
      .find({ _id: new ObjectId(id) })
      .toArray()
      .then((result) => {
        res.status(200).json(result)
      })
  } catch (err) {
    res.status(500).json({ message: err })
  }
})

app.get('/tag', (req, res) => {
  try {
    collection
      .find({}, { tag: true, _id: 0 })
      .toArray()
      .then((result) => {
        console.log(result)
        res.json(result).status(200)
      })
  } catch (err) {
    res.status(500).json({
      message: err,
    })
  }
})

app.get('/tag/:id', (req, res) => {
  const id = req.params.id
  try {
    collection
      .find({ _id: new ObjectId(id) })
      .toArray()
      .then((result) => {
        res.status(200).json(result)
      })
  } catch (err) {
    res.status(500).json({ message: err })
  }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

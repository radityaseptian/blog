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
app.use(express.urlencoded({ limit: '20mb', extended: true }))
app.use(cookieParser())
app.use(express.static('upload'))
app.use(router)

// ===== Routes ===== //
app.get('/', (req, res) => {
  try {
    collection.content
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

app.get('/search', (req, res) => {
  const keyw = req.query.keyw
  try {
    collection.content
      .find({ title: { $regex: keyw } })
      .limit(5)
      .toArray()
      .then((result) => {
        if (result.length == 0) {
          return res.json({ message: 'Not found!' }).status(404)
        }
        res.json(result)
      })
  } catch (err) {
    res.json({ message: err }).status(500)
  }
})

app.get('/article', (req, res) => {
  const page = parseInt(req.query.page) ?? 1
  try {
    collection.content
      .find()
      .skip(page == 1 ? 0 : page * 12 - 12)
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
    collection.content
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
    collection.content
      .find()
      .toArray()
      .then((result) => {
        let tag = []
        result.forEach((item) => {
          tag.push(item.tag)
        })
        function count(array) {
          return array.reduce((acc, i) => {
            acc[i] = (acc[i] || 0) + 1
            return acc
          }, {})
        }
        res.json(count(tag)).status(200)
      })
  } catch (err) {
    res.status(500).json({
      message: err,
    })
  }
})

app.get('/tag/:slug', (req, res) => {
  const slug = req.params.slug
  try {
    collection.content
      .find({ tag: slug })
      .toArray()
      .then((result) => {
        res.status(200).json(result)
      })
  } catch (err) {
    res.status(500).json({ message: err })
  }
})

app.get('/login', (req, res) => {
  const token = req.cookies.token
  try {
    const verify = jwt.verify(token, process.env.KEY)
    console.log(verify)
    if (verify) {
      return res.status(200)
    }
    res.status(404)
  } catch (err) {
    res.status(500).json({ message: err })
  }
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body
  try {
    collection.user
      .find({ username, password })
      .toArray()
      .then((user) => {
        if (user.length == 0) {
          return res.json({ message: 'Error invalid login!' }).status(400)
        }
        if (user[0].username == username && user[0].password == password) {
          const token = jwt.sign({ username, password }, process.env.KEY, {
            expiresIn: '1h',
          })
          res.cookie('token', token, { httpOnly: true })
          return res.status(200).json({ message: 'ok' })
        }
      })
  } catch (err) {
    res.status(500).json({ message: err })
  }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

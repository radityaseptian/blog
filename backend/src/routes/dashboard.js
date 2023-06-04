import express from 'express'
import { collection, ObjectId } from '../../databases/mongodb.js'
import multer from 'multer'
import { isAdmin } from '../middleware/isAdmin.js'
import path from 'path'
import cookieParser from 'cookie-parser'

const storage = multer.diskStorage({
  destination: path.relative('', 'upload'),
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
  },
})

const upload = multer({ storage: storage })
const router = express.Router()

// ======== Dashboard Admin ======== //

// ==== validate middleware
router.use(cookieParser())
router.use('/dashboard', isAdmin)

// ==== GET
router.get('/dashboard', async (req, res) => {})

router.get('/dashboard/post', async (req, res) => {
  try {
    const result = await collection.content.find().sort({ _id: -1 }).toArray()
    res.json(result).status(200)
  } catch (err) {
    res
      .json({
        message: err,
      })
      .status(500)
  }
})

// ==== POST
router.post('/dashboard/post', upload.single('image'), (req, res) => {
  try {
    req.body.image = req.file.filename
    collection.content.insertOne(req.body)
    res.status(200).json({ message: true })
  } catch (err) {
    res.json({ message: err }).status(500)
  }
})

// ==== PUT
router.put('/dashboard/:id', (req, res) => {})

// ==== DELETE
router.delete('/dashboard/:id', async (req, res) => {
  const id = req.params.id
  try {
    await collection.content.deleteOne({ _id: new ObjectId(id) })
    res.status(200).json({ message: true })
  } catch (err) {
    res.status(500).json({
      message: err,
    })
  }
})

export { router }

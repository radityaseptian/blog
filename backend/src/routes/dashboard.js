import express from 'express'
import { collection, ObjectId } from '../../databases/mongodb.js'
import { isAdmin } from '../middleware/isAdmin.js'

const router = express.Router()

// ======== Dashboard Admin ======== //

// ==== validate middleware
// router.use(isAdmin())

// ==== GET
router.get('/dashboard', (req, res) => {})

router.get('/dashboard/post', async (req, res) => {
  try {
    const result = await collection.find({}).toArray()
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
router.post('/dashboard/post', (req, res) => {
  try {
    collection.insertOne(req.body)
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
    await collection.deleteOne({ _id: new ObjectId(id) })
    res.status(200).json({ message: true })
  } catch (err) {
    res.status(500).json({
      message: err,
    })
  }
})

export { router }

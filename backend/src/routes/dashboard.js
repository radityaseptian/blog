import expres from 'express'
import { collection } from '../../databases/mongodb.js'
const router = expres.Router()
import { isAdmin } from '../middleware/isAdmin.js'

// ======== Dashboard Admin ======== //

// ==== validate middleware
// router.use(isAdmin())

// ==== GET
router.get('/dashboard', (req, res) => {})

// ==== POST
router.post('/dashboard', (req, res) => {
  console.log(req.body)
  try {
    collection.insertOne(req.body)
    res.json({ res: 'Success' })
  } catch (err) {
    res.send(err)
  }
})

// ==== PUT
router.put('/dashboard/:id', (req, res) => {})

// ==== DELETE
router.delete('/dashboard/:id', (req, res) => {})

export { router }

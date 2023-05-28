import expres from 'express'
const router = expres.Router()
import {validate} from '../middleware/isAdmin'

// ======== Dashboard Admin ======== //

// ==== validate middleware
router.use(isAdmin())

// ==== GET
router.get('/dashboard', (req,res) => {

})

// ==== POST
router.post('/dashboard', (req, res) => {

})

// ==== PUT
router.put('/dashboard/:id', (req, res) => {

})

// ==== DELETE
router.delete('/dashboard/:id', (req,res) => {

})

export {router}

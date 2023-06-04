import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

export function isAdmin(req, res, next) {
  const token = req.cookies.token
  if (token) {
    try {
      const verify = jwt.verify(token, process.env.KEY)
      if (verify) {
        next()
      }
    } catch (err) {
      return res.status(500).json({ message: 'Invalid Token!' })
    }
    return
  }
  return res.status(400).json({ message: 'Cannot access dashboard!' })
}

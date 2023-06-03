import { MongoClient, ObjectId } from 'mongodb'
import * as dotenv from 'dotenv'
dotenv.config()
const client = await MongoClient.connect(process.env.URL)
const collection = {
  content: client.db(process.env.DB).collection(process.env.COLLECTION_CONTENT),
  user: client.db(process.env.DB).collection(process.env.COLLECTION_USER),
}
export { collection, ObjectId }

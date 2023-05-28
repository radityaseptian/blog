import { MongoClient, ObjectId } from 'mongodb'
import * as dotenv from 'dotenv'
dotenv.config()
const client = await MongoClient.connect(process.env.URL)
const collection = client.db(process.env.DB).collection(process.env.COLLECTION)
export { collection, ObjectId }
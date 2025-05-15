import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URL) {
  throw new Error('请在环境变量中设置 MONGODB_URL')
}

const uri = process.env.MONGODB_URL
const options = {}

let client
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // 在开发环境中使用全局变量以避免连接数过多
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  // 在生产环境中创建新的连接
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise 
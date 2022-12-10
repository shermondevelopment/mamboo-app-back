import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

export default mongoose.connect(process.env.MONGODB_APP_MAMBOO as string)

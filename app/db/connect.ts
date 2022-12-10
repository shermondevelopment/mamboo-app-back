import mongoose from 'mongoose'

export default mongoose.connect(process.env.MONGODB_APP_MAMBOO as string)

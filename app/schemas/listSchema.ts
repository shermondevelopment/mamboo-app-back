import mongoose from 'mongoose'

/** uuid */
import { v4 } from 'uuid'

const ListSchema = new mongoose.Schema({
  _id: { type: String, default: v4, required: true },
  title: { type: String, default: true }
})

export default ListSchema

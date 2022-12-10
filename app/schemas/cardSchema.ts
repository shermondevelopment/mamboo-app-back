import mongoose from 'mongoose'

/** uuid */
import { v4 } from 'uuid'

const cardSchema = new mongoose.Schema({
  _id: { type: String, default: v4 },
  content: { type: String, required: true },
  position_card: { type: String, required: true, default: 0 },
  list_id: { type: String, required: true }
})

export default mongoose.model('card', cardSchema)

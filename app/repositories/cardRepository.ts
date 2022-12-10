import cardSchema from '../schemas/cardSchema'

export const addNewCardRepository = async (
  content: string,
  list_id: string
) => {
  await cardSchema.create({ content, list_id })
}

export const findCardRepository = async (card_id: string) => {
  return await cardSchema.findOne({ _id: card_id })
}

export const updateCardRepository = async (
  content: string,
  list_id: string,
  position_card: number,
  id_card: string
) => {
  await cardSchema.updateOne(
    { _id: id_card },
    { content, list_id, position_card }
  )
}

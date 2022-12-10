import cardSchema from '../schemas/cardSchema'

export const addNewCardRepository = async (
  content: string,
  list_id: string
) => {
  await cardSchema.create({ content, list_id })
}

/** repository */
import { addNewCardRepository } from '../repositories/cardRepository'
import { findListRepostiory } from '../repositories/listRepository'

/** utils */
import AppError from '../utils/appError'

export const newCardService = async (content: string, list_id: string) => {
  const listExist = await findListRepostiory(list_id)

  if (!listExist) {
    AppError(404, 'list not exist')
  }
  await addNewCardRepository(content, list_id)
}

/** repository */
import {
  addNewCardRepository,
  findCardRepository,
  updateCardRepository
} from '../repositories/cardRepository'
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

export const updateCardService = async (
  content: string,
  list_id: string,
  position_card: number,
  id: string
) => {
  const listExist = await findListRepostiory(list_id)

  if (!listExist && list_id) {
    AppError(404, 'list not exist')
  }

  const cardExits = findCardRepository(id)

  if (!cardExits) {
    AppError(404, 'card not exist')
  }

  await updateCardRepository(content, list_id, position_card, id)
}

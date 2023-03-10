/** repository */
import {
  addNewCardRepository,
  findCardRepository,
  updateCardRepository,
  findCardToListId,
  deleteCardRepository
} from '../repositories/cardRepository'
import {
  findListRepostiory,
  getListRepository
} from '../repositories/listRepository'

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

export const getCardService = async () => {
  const list = await getListRepository()

  const listWithCards = []

  for (let i = 0; i < list.length; i++) {
    const findCard = await findCardToListId(list[i]._id)
    listWithCards.push({
      _id: list[i]._id,
      title: list[i].title,
      cards: findCard
    })
  }

  return listWithCards
}

export const deleteCardService = async (card_id: string) => {
  const cardExits = await findCardRepository(card_id)

  if (!cardExits) {
    AppError(404, 'card not exist')
  }

  await deleteCardRepository(card_id)
}

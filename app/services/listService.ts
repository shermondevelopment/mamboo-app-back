import {
  addNewListRepository,
  updateListRepository,
  findListRepostiory,
  deleteListRepository
} from '../repositories/listRepository'

/** utils */
import AppError from '../utils/appError'

export const newListService = async (title: string) => {
  await addNewListRepository(title)
}

export const updateListService = async (idOfList: string, title: string) => {
  const listExist = findListRepostiory(idOfList)

  if (!listExist) {
    AppError(404, 'list not exists')
  }

  await updateListRepository(idOfList, title)
}

export const deleteListService = async (idOfList: string) => {
  const listExist = findListRepostiory(idOfList)

  if (!listExist) {
    AppError(404, 'list not exists')
  }

  await deleteListRepository(idOfList)
}

import { addNewListRepository } from '../repositories/listRepository'

export const newListService = async (title: string) => {
  await addNewListRepository(title)
}

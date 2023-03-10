/** schema */
import ListSchema from '../schemas/listSchema'

export const addNewListRepository = async (title: string) => {
  await ListSchema.create({ title })
}

export const updateListRepository = async (idOfList: string, title: string) => {
  await ListSchema.updateOne({ _id: idOfList }, { title })
}

export const findListRepostiory = async (idOfList: string) => {
  return await ListSchema.findOne({ _id: idOfList })
}

export const deleteListRepository = async (idOfList: string) => {
  await ListSchema.deleteOne({ _id: idOfList })
}

export const getListRepository = async () => {
  return await ListSchema.find()
}

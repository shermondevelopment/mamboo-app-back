/** schema */
import ListSchema from '../schemas/listSchema'

export const addNewListRepository = async (title: string) => {
  await ListSchema.create({ title })
}

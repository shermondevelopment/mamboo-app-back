import listSchema from '../../app/schemas/listSchema'

export const createListFactory = async () => {
  return await listSchema.create({ title: 'mockList' })
}

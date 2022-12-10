import { Request, Response } from 'express'

/** services */
import { newListService, updateListService } from '../services/listService'

export const newListController = async (req: Request, res: Response) => {
  const { title } = req.body
  await newListService(title)
  res.sendStatus(201)
}

export const updateListController = async (req: Request, res: Response) => {
  const { title } = req.body
  const { id } = req.params
  await updateListService(id, title)
  res.sendStatus(200)
}

import { Request, Response } from 'express'

/** services */
import { newListService } from '../services/listService'

export const newListController = async (req: Request, res: Response) => {
  const { title } = req.body
  await newListService(title)
  res.sendStatus(201)
}

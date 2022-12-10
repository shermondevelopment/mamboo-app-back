import { Request, Response } from 'express'

/** services */
import {
  newListService,
  updateListService,
  deleteListService,
  getListService
} from '../services/listService'

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

export const deleteListController = async (req: Request, res: Response) => {
  const { id } = req.params

  await deleteListService(id)
  res.sendStatus(204)
}

export const getListController = async (req: Request, res: Response) => {
  const list = await getListService()
  res.status(200).json(list)
}

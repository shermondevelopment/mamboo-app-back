import { Request, Response } from 'express'

/** services */
import { newCardService, updateCardService } from '../services/cardService'

export const newCardController = async (req: Request, res: Response) => {
  const { content, list_id } = req.body

  await newCardService(content, list_id)

  res.sendStatus(201)
}

export const updateCardController = async (req: Request, res: Response) => {
  const { id } = req.params
  const { content, list_id, position_card } = req.body

  await updateCardService(content, list_id, position_card, id)

  res.sendStatus(200)
}

import { Request, Response } from 'express'

/** services */
import { newCardService } from '../services/cardService'

export const newCardController = async (req: Request, res: Response) => {
  const { content, list_id } = req.body

  await newCardService(content, list_id)

  res.sendStatus(201)
}

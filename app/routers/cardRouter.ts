import { Router } from 'express'

/** controller */
import {
  newCardController,
  updateCardController,
  listCardController,
  deleteCardController
} from '../controllers/cardController'

/** middleware */
import bodyValidatory from '../middlewares/bodyValidatory'

/** validator */
import {
  cardValidation,
  cardUpdateValidation
} from '../validators/cardValidator'

const cardRouter = Router()

cardRouter.post('/card', bodyValidatory(cardValidation), newCardController)
cardRouter.put(
  '/card/:id',
  bodyValidatory(cardUpdateValidation),
  updateCardController
)
cardRouter.get('/cards', listCardController)
cardRouter.delete('/card/:id', deleteCardController)

export default cardRouter

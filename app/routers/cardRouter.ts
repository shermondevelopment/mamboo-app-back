import { Router } from 'express'

/** controller */
import {
  newCardController,
  updateCardController
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

export default cardRouter

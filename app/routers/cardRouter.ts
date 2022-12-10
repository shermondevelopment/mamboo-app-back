import { Router } from 'express'

/** controller */
import { newCardController } from '../controllers/cardController'

/** middleware */
import bodyValidatory from '../middlewares/bodyValidatory'

/** validator */
import { cardValidation } from '../validators/cardValidator'

const cardRouter = Router()

cardRouter.post('/card', bodyValidatory(cardValidation), newCardController)

export default cardRouter

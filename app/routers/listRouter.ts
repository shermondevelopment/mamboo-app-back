import { Router } from 'express'

/** controllers */
import { newListController } from '../controllers/listController'

/** middleware */
import bodyValidatory from '../middlewares/bodyValidatory'

/** validation scheme for list */
import { listValidator } from '../validators/listValidator'

/** router of list */
const listRouter = Router()

listRouter.post('/new/list', bodyValidatory(listValidator), newListController)

export default listRouter

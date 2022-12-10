import { Router } from 'express'

/** controllers */
import {
  newListController,
  updateListController,
  deleteListController,
  getListController
} from '../controllers/listController'

/** middleware */
import bodyValidatory from '../middlewares/bodyValidatory'

/** validation scheme for list */
import { listValidator } from '../validators/listValidator'

/** router of list */
const listRouter = Router()

listRouter.post('/new/list', bodyValidatory(listValidator), newListController)
listRouter.put(
  '/update/list/:id',
  bodyValidatory(listValidator),
  updateListController
)
listRouter.delete('/delete/list/:id', deleteListController)
listRouter.get('/get/list', getListController)

export default listRouter

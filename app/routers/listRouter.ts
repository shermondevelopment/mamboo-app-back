import { Router } from 'express'

/** controllers */
import { newListController } from '../controllers/listController'

/** router of list */
const listRouter = Router()

listRouter.post('/new/list', newListController)

export default listRouter

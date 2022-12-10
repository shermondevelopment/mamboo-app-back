import { Router } from 'express'

/** routers */
import listRouter from './listRouter'
import cardRouter from './cardRouter'

const routers = Router()

routers.use(listRouter)
routers.use(cardRouter)

export default routers

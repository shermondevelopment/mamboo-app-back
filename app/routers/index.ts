import { Router } from 'express'

/** routers */
import listRouter from './listRouter'

const routers = Router()

routers.use(listRouter)

export default routers

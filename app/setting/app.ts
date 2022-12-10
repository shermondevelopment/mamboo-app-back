/** dotenv */
import 'dotenv/config'

/** library to handle errors async */
import 'express-async-errors'

/** express */
import express, { json } from 'express'

/** cors */
import cors from 'cors'

/** routers */
import routers from '..//routers'

/** middleware */
import errorHandle from '../middlewares/errorHandle'

/** server */
const app = express()
app.use(json())
app.use(cors())
app.use(routers)
app.use(errorHandle)

export default app

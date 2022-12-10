/** dotenv */
import 'dotenv/config'

/** library to handle errors async */
import 'express-async-errors'

/** express */
import express, { json } from 'express'

/** cors */
import cors from 'cors'

/** routers */
import routers from './routers'

/** connection with db */
import connectWithMongoDb from './db/connect'

/** middleware */
import errorHandle from './middlewares/errorHandle'

/** server */
const app = express()
app.use(json())
app.use(cors())
app.use(routers)
app.use(errorHandle)

connectWithMongoDb
  .then(() => {
    app.listen(process.env.PORT_APP_MAMBOO || 3001, () =>
      console.log(`app running in port ${process.env.PORT_APP_MAMBOO} 🚀🚀🚀`)
    )
  })
  .catch(() => console.log('connection failed ❌❌❌'))

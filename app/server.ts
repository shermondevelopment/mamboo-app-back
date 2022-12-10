/** dotenv */
import 'dotenv/config'

/** express */
import express, { json } from 'express'

/** cors */
import cors from 'cors'

/** server */
const app = express()
app.use(json())
app.use(cors())

/** connection with db */
import connectWithMongoDb from './db/connect'

connectWithMongoDb
  .then(() => {
    app.listen(process.env.PORT_APP_MAMBOO || 3001, () =>
      console.log(`app running in port ${process.env.PORT_APP_MAMBOO} 🚀🚀🚀`)
    )
  })
  .catch(() => console.log('connection failed ❌❌❌'))

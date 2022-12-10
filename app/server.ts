/** app */
import app from './setting/app'

/** connection with db */
import connectWithMongoDb from './db/connect'

connectWithMongoDb
  .then(() => {
    app.listen(process.env.PORT_APP_MAMBOO || 3001, () =>
      console.log(`app running in port ${process.env.PORT_APP_MAMBOO} 🚀🚀🚀`)
    )
  })
  .catch(() => console.log('connection failed ❌❌❌'))

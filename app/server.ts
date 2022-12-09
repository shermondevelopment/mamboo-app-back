/** express */
import express, { json } from 'express'

/** cors */
import cors from 'cors'

/** server */
const app = express()
app.use(json())
app.use(cors())

app.listen(3000, () => console.log('app running in port 3000'))

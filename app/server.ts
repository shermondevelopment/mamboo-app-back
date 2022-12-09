import express, { json } from 'express'

/** server */
const app = express()
app.use(json())

app.listen(3000, () => console.log('app running in port 3000'))

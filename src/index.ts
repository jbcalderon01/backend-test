import express from 'express'
import cors from 'cors'
import { config, connectMongo } from './config'
import router from './api'

const app = express()

// MiddleWares
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '70mb' }))
app.use(cors({
  origin: '*'
}))

connectMongo()

// Router
app.use(`/api/v${config.API.VERSION}`, router)

app.listen(config.API.PORT, () => console.log(`Server listen on port ${config.API.PORT}`))
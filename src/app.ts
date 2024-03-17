import "dotenv/config"
import express from "express"
import cors from "cors"

import { router } from "./routes"
import db from "./configuration/mongo"

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use('/api', router)

db().then(() => console.log('Conexion Ready'))
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
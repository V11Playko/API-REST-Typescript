import "dotenv/config"
import express from "express"
import cors from "cors"

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
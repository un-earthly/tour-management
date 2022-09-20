const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()



const tourRoute = require("./src/Routes/tours.route.js")
const { connectToServer } = require("./utils/db.js")

app.use(cors())
app.use(express.json())




app.use("/api/v1", tourRoute)

connectToServer()

app.listen(process.env.PORT || 80)
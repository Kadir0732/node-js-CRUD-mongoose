const { urlencoded } = require("express")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("./modules/Router")

const PORT = 3000
const DBConnectionUrl = ""

mongoose.connect(DBConnectionUrl).then(() => {
    console.log("API Started")
    app.use(urlencoded(express.urlencoded({extended:true})))
    app.use(router)
    app.listen(PORT)
}).catch((e) => {
    console.log("error database connect: " + e)
})

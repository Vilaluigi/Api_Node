const express = require("express")
const server = express()
require("./src/db/db")
const Tasks= require("./src/models/task")
const app= require("./src/router")


server.use(express.json())
server.use(app)


server.listen(3003,()=>{
    
    console.log("Servidor rodando")
})
const express= require("express")
const TasksController= require("./controllers/taskController")
const app= express()



app.get("/",TasksController.listar)



module.exports=app
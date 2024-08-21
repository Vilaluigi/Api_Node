const express= require("express")
const TasksController= require("./controllers/taskController")
const app= express()



app.get("/listar",TasksController.listar)
app.post("/criar",TasksController.Criar)
app.delete("/deletar/:id",TasksController.Deletar)
app.put("/atualizar/:id",TasksController.Atuali)



module.exports=app
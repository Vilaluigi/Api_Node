const express= require("express")
const Tasks= require("../models/task")


class TasksController{
    async listar(request,response){
        const lista= await Tasks.findAll()
        return response.send("No momento temos esses dados:",lista)
    }
}




module.exports= new TasksController
const express= require("express")
const Tasks= require("../models/task")


class TasksController{
    async listar(request,response){
        const lista= await Tasks.findAll()
         response.status(200).json({message:"No momento temos esses dados:",
            teste:lista})
    }

    async Criar(request,response){
        const {title, status}= request.body
        if(!title.trim() || !status.trim()){
            response.status(400).json({message: "Campo vazio"})
        }
        const novo= await Tasks.create({
        title: title,
        status: status
        })
        response.status(201).json({message:"Task criada com sucesso"})
    }
    async Deletar(request,response){
        const {id}= request.params
        const tirar= await Tasks.destroy({where:{id: id}})
        response.status(400).json({message: "Task deletada"})
    }
    async Atuali(request,response){
        const {id}= request.params
        const {title,status}= request.body
        const atualizar= await Tasks.update({title: title, status: status},{where:{id:id}})
        response.status(201).json({message:"Task atualizada com sucesso"})
    }
}




module.exports= new TasksController
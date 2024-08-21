const Sequelize = require("sequelize")


const sequelize= new Sequelize("Treino_Api","root","luigi",{
    host: "localhost",
    dialect: "mysql"
})

try {
    sequelize.authenticate()
    console.log("conexão funcionando")
} catch (error) {
    console.log("Não houve conexão", error)
}

module.exports= sequelize
const {Sequelize,DataTypes}= require("sequelize")
const db= require("../db/db")

const Tasks = db.define(
    "tasks",{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull:false,

        },
        status:{
            type: DataTypes.STRING,
            allowNull: false
        },
        
    }
)

module.exports= Tasks
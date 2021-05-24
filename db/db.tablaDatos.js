const { DataTypes, Model } = require('sequelize')
const sequelize = require('./db.conexion')

const Data = sequelize.define('data_usuario', {
    listar : {
        type : DataTypes.STRING,  
        allowNull : false,         
    },

    agregar : {
        type : DataTypes.STRING,
        allowNull : false, 
    }, 

    eliminar : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    modificar : {
        type : DataTypes.STRING,
        allowNull : false,
    }
})

module.exports = Data
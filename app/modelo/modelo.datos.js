const sequelize = require ('../../db/db.conexion')

module.exports = class Datos {
    constructor (datos) {
        this.datos = datos
    }

    static async listar (){
        //console.log('metodo ' + this.datos)
        let resultado = await sequelize.query('SELECT * FROM usuarios')
      
        console.log(resultado);
        return resultado
    }

    static async alta (data){
        let usuarioNuevo = [
            data.nombres, 
            data.apellidos,
            data.username, 
            data.email,
            data.pass, 
            data.cpassword
        ]
        try {
            let resultado = await sequelize.query(`INSERT INTO usuarios(nombres, apellidos, username, email, pass, cpassword) VALUES (?,?,?,?,?,?)`,
            {replacements : usuarioNuevo, type: sequelize.QueryTypes.SELECT})
           

            return resultado
        } catch (e) {
            console.log(e);
            throw new Error ('Ocurrio un error al realizar la alta')
        }
    }

    static async eliminar (usuario){
        let usuarioBaja = [
            usuario.username
        ]
        try {
            console.log('metodo' + this.datos);
            let resultado = await sequelize.query(`DELETE FROM usuarios WHERE username = ? `,
            {replacements : usuarioBaja, type : sequelize.QueryTypes.SELECT})
           
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error ('Ocurrio un error al realizar la baja')
        }
    }

    async modificar (){
        
    }
}
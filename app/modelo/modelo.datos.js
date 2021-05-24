const sequelize = require ('../../db/db.conexion')

module.exports = class Datos {
    constructor (datos) {
        this.datos = datos
    }

    async listar (){
        console.log('metodo ' + this.datos)
        let resultado = await sequelize.query('SELECT * FROM usuarios')
        let solucion = resultado [0][0][this.datos]
        return solucion
    }

    async alta (){
        let usuarioNuevo = [
            this.datos.nombres, 
            this.datos.apellidos,
            this.datos.username, 
            this.datos.email,
            this.datos.password, 
            this.datos.cpassword
        ]
        try {
            console.log('metodo' + this.datos)
            let resultado = await sequelize.query(`INSERT INTO (nombres, apellidos, username, email, password, cpassword) VALUES (?,?,?,?,?)`,
            {replacements : usuarioNuevo, type: sequelize.QueryType.SELECT})
            return resultado
        } catch (e) {
            console.log(e);
            throw new Error ('Ocurrio un error al realizar la alta')
        }
    }

    async eliminar (usuario){
        try {
            console.log('metodo' + this.datos);
            let resultado = await sequelize.query(`DELETE FROM usuarios WHERE username = ${this.datos.username} `)
            let solucion = resultado [0][0]
            return solucion
        } catch (e) {
            console.log(e);
            throw new Error ('Ocurrio un error al realizar la baja')
        }
    }

    async modificar (){

    }
}
const usuarios = require('../modelo/modelo.datos')

module.exports.listarUsuarios = async ()=>{
    try {
        let resultado = await usuarios.listar()
        return resultado
    } catch (e) {
        console.log(e);
        throw new Error ('Error al listar')
    }
}

module.exports.altaUsuarios = async (data)=>{
    try {
        let resultado = await usuarios.alta(data)
        //console.log(resultado);
      
        return 'Alta correcta'
    } catch (e) {
        console.log(e);
        throw new Error ('Error al agregar')
    }
}

module.exports.bajaUsuario = async (data) => {
    try {
       
        let resultado = await usuarios.eliminar(data)
        console.log(resultado);
        return 'Baja correcta'
    } catch (e) {
        console.log(e);
        throw new Error ('Error al dar de baja  ')
    }
}
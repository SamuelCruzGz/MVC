const controladorUsuario = require ('../controlador/controlador.datos')

module.exports = async (app) => {
    app.get('/', async (req, res) => {
        try {
            res.render('index')
        } catch (e) {
            console.log(e);
            res.status(400).json('Error al encontrar')
        }
    })

    app.get('/usuario', async (req, res)=>{
        try {
            let resultado = await controladorUsuario.listarUsuarios()
            res.render('index')
        } catch (error) {
            console.log(e);
        }
    })
}
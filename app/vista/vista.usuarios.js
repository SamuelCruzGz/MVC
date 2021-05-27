const controladorUsuario = require ('../controlador/controlador.datos')

module.exports = async (app) => {
    app.get('/', async (req, res) => {
        try {
            //res.render('index')
            console.log('no tengo index aun ');
        } catch (e) {
            console.log(e);
            res.status(400).json('Error al encontrar')
        }
    })

    app.get('/usuario', async (req, res)=>{ 
        try {
            
            let resultado = await controladorUsuario.listarUsuarios()
            res.send(resultado)
              
        } catch (e) {
            console.log(e);
        }
    })
    
    app.post('/altaUsuario', async (req, res)=>{
        let alta = req.body
        try {
            let resultado = await controladorUsuario.altaUsuarios(alta)
            res.send(resultado)
        } catch (e) {
            console.log(e);
        }
    })
    app.post('/bajaUsuario', async (req, res)=>{
        let baja = req.body
        try {
            let resultado = await controladorUsuario.bajaUsuario(baja)
            res.send(resultado)
        } catch (e) {
            console.log(e);
        }
    })
}
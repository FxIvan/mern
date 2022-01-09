const express = require('express')
const cors = require('cors')
const app = express()

app.set('port', process.env.PORT || 27017) //Guardamos como 'port', la configuracion del Puerto

//midllLewaress
app.use(cors())// permite hacer una peticion a un servicio ajeno, como por ejemplo a mongodb
app.use(express.json())// recibimos y enviamos archivo JSON al servidor
//Routes
app.get('/',(req,res)=>{
    res.send("Bievenido ami api Rest")
})

//Ruta para nuestra api de Usuarios
//Hacemos que utilize una ruta especifica
app.use('/usuarios', require('./routes/usuarios'))
module.exports = app


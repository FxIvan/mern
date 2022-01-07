const {Schema, model} = require('mongoose')

const UsuariosSchema = Schema({
    nombre:String,
    apellido:String,
    edad:{
        type:Number,
        min:0
    },
    telefono:Number,
    correo:String

},
{
    timestamps:true //Fecha y Hora de la creacion del esquema
}
)

module.exports = model('Usuarios', UsuariosSchema) //dentro de la db se la va a definir como Esquema a Usuarios
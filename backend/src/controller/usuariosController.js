const UsuariosController = {}

const Usuario = require('../models/Usuarios') // traemos el esquema

//Son 5 arrow function por que hay 5 pedidos(dos get,post.put y delete)

UsuariosController.getUser = async(req,res)=>{ //GET
    const UsuarioPedido = await Usuario.find() //vamos a traer todo los usuairo
    res.json(UsuarioPedido) //vamos a pedir todos los usuarios que haya en un JSON
}

UsuariosController.getCreate = async(req,res)=>{ //POST

    const {nombre,apellido,edad,telefono,correo} = req.body

    const newUsuario = new Usuario({
        nombre:nombre,
        apellido:apellido,
        edad:edad,
        telefono:telefono,
        correo:correo
    })
    await newUsuario.save()
    res.json({message:'El usuario se ah guardado correctamente'})
}

UsuariosController.getBuscarID = async(req,res)=>{ //GET
    const newUsuarioId = await Usuario.findById(req.params.id)//Encuentra en Mongo su ID
    res.json(newUsuarioId)
}

UsuariosController.getDelete = async(req,res)=>{ //GET
    await Usuario.findByIdAndDelete(req.params.id) //elimina el objeto por el tipo de ID, sin el await no me dejaba hacer la peticion de delete
    res.json({message:"Se a borrado exitosamente"})
}

UsuariosController.Update = async(req,res)=>{
    const {nombre,apellido,edad,telefono,correo} = req.body
    await Usuario.findByIdAndUpdate(req.params.id, {
        nombre,
        apellido,
        edad,
        correo,
        telefono
    })
    res.json({message:'El usuario se ha actualizado'})
}

module.exports = UsuariosController
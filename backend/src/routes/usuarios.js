const {Router} = require('express')
const router = Router()

const {getUser, getCreate , getBuscarID , getDelete , Update} = require('../controller/usuariosController')


router.route('/')

.get(getUser) //pedimos informacion a traves de la url osea URL
.post(getCreate) //pedimos informacion al servidor donde se encuentra la informacion del servidor 

router.route('/:id')

.get(getBuscarID)
.delete(getDelete)//Elimina
.put(Update) //actualiza datos

module.exports = router
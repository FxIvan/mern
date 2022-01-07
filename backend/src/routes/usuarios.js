const {Router} = require('express')
const router = Router()


router.route('/')

.get() //pedimos informacion a traves de la url osea URL
.post() //pedimos informacion al servidor donde se encuentra la informacion del servidor 

router.route('/:id')

.get()
.delete()//Elimina
.put() //actualiza datos

module.exports = router
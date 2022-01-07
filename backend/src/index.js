require('dotenv').config() //es lo primero por que primero tiene que leer esto
const app = require('./app')
require('./database')
// asyn await es como decir miestras se ejecuta otra cosa quiero que se ejecute este mientras
    async function main(){
     await app.listen(app.get('port'))
     console.log('El servidor se esta ejecutando por el puerto:', app.get('port'))
    }

main()
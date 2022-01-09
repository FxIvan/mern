const mongoose = require('mongoose')

const {MONGO_HOST,MONGO_PORT,MONGO_RUTA} = process.env; //es mas seguro que este en env, por que este nose puede ver en el reposotorio

const URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_RUTA}`
mongoose.connect(URI)


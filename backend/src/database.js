const mongoose = require('mongoose')

const URI = process.env.DB_URL ? process.env.DB_URL : 'mongodb://localhost/mern'

mongoose.connect(URI)

const connection = mongoose.connection

connection.once('open',()=>{
    console.log('Conexion Establecida:', URI)
})

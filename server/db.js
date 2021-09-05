const mongoose = require('mongoose')

const database = 'people'
require('dotenv').config()

const server = mongoose.connect(`mongodb://${mongoURI}/${database}`,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('We are connected to the DB'))
.catch(error => console.log('something happened', error))


module.exports={server}
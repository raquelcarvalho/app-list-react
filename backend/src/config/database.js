const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo2')//AQUI EU DEFINO E CRIO O BANCO DE DADOS (O FAMOSO DATABASE)
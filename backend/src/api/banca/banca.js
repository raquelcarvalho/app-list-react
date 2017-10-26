const restful = require('node-restful')
const mongoose = restful.mongoose

const bancaSchema = new mongoose.Schema({
	title: { type: String, required: true },
	subtitulo: { type: String, required: true },
	valor: { type: String, required: true },
	done: { type: Boolean, required: true, default: false },
	createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Banca', bancaSchema)
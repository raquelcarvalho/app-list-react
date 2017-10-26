const express = require('express')
module.exports = function(server) {
	// API Routes
	const router = express.Router()
	server.use('/api', router)
	// TODO Routes
	const todoService = require('../api/todo/todoService')
	todoService.register(router, '/todos') //caminho para acessar api
	const bancaService = require('../api/banca/bancaService')
	bancaService.register(router, '/bancas') //caminho para acessar api
}
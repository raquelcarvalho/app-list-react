const Banca = require('./banca')

Banca.methods(['get', 'post', 'put', 'delete'])
Banca.updateOptions({new: true, runValidators: true})

module.exports = Banca
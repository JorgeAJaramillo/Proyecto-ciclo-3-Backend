const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
    cedula: Number,
    name: String,
    state: String,
    rol: String,

})

module.exports = mongoose.model('usuarios', UsuarioSchema);
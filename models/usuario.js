const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
    cedula: Number,
    nombre: String,
    estado: String,
    rol: String,

})

module.exports = mongoose.model('usuarios', UsuarioSchema);
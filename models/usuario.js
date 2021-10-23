const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
    cedula: Number,
    nombre: String,
    rol: Boolean,
    estado: String,
    

})

module.exports = mongoose.model('usuarios', UsuarioSchema);
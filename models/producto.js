const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = Schema({
    valor: Number,
    descripcion: String,
    estado: Boolean
})

module.exports = mongoose.model('productos', ProductoSchema);
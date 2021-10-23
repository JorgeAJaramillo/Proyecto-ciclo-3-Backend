const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VentaSchema = Schema({

    valor: Number,
    fecha: Date,
    documentoCliente: Number,
    documentoVendedor: Number,
    descripcion: String
})

module.exports = mongoose.model('ventas', VentaSchema);
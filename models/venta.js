const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VentaSchema = Schema({
    identificacion: Number,
    descripcion: String,
    valorTotal: Number,
    estado: String,

})

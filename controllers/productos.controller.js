const ProductoSchema = require('../models/producto');
const { validationResult } = require('express-validator');

const getProducto = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let producto = await ProductoSchema.findById(req.params.id);
            res.status(200).json({ producto });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Producto no encontrado"
                }
            })
        }
    } else {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not found"
            }
        })
    }
}

const getProductos = async (req, res) => {
    try {
        let productos = await ProductoSchema.find();
        res.status(200).json({ productos });
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const createProducto = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }
    let producto = new ProductoSchema(req.body);
    try {
        await producto.save();
        res.status(201).json({ data: producto });
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const updateProducto = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }
    try {
        let newProducto = {
            id: req.params.id,
            valor: req.body.valor,
            descripcion: req.body.descripcion,
            estado: req.body.estado
        }
        await ProductoSchema.findByIdAndUpdate(req.params.id, newProducto);
        res.status(201).json({ data: newProducto })
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not found"
            }
        })
    }
}


const deleteProducto = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let result = await ProductoSchema.findByIdAndRemove(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Producto no encontrado"
                }
            })
        }
    } else {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not found"
            }
        })
    }
}

module.exports.getProducto = getProducto;
module.exports.getProductos = getProductos;
module.exports.createProducto = createProducto;
module.exports.updateProducto = updateProducto;
module.exports.deleteProducto = deleteProducto;
const Ventaschema = require('../models/Venta');
const { validationResult } = require('express-validator');

const getVenta = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let venta = await Ventaschema.findById(req.params.id);
            res.status(200).json({ venta });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Venta no encontrado"
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

const getVentas = async (req, res) => {
    try {
        let ventas = await Ventaschema.find();
        res.status(200).json({ ventas });
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

const createVenta = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }
    let venta = new Ventaschema(req.body);
    try {
        await venta.save();
        res.status(201).json({ data: venta });
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

const updateVenta = async (req, res) => {
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
        let newVenta = {
            id: req.params.id,
            valor: req.body.valor,
            descripcion: req.body.descripcion,
            estado: req.body.estado
        }
        await Ventaschema.findByIdAndUpdate(req.params.id, newVenta);
        res.status(201).json({ data: newVenta })
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


const deleteVenta = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let result = await Ventaschema.findByIdAndRemove(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Venta no encontrado"
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

module.exports.getVenta = getVenta;
module.exports.getVentas = getVentas;
module.exports.createVenta = createVenta;
module.exports.updateVenta = updateVenta;
module.exports.deleteVenta = deleteVenta;
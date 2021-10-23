const UsuarioSchema = require('../models/usuario')


const getUsuario = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let usuario = await UsuarioSchema.findById(req.params.id);
            res.json({ usuario });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede obtener el usuario sin el id" })
    }
}

const getUsuarios = async (req, res) => {
    try {
        let usuarios = await UsuarioSchema.find();
        res.json({ usuarios });
    }
    catch (err) {
        console.log(err);
    }
}

const createUsuario = async (req, res) => {
    if (typeof req.body != 'undefined') {
        let usuario = new UsuarioSchema(req.body);
        try {
            await usuario.save();
            res.json({ msg: 'Se ha creado el usuario ' + usuario.id });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede crear el usuario, revisar los parametros" })
    }
}

const updateUsuario = async (req, res) => {
    
    if (typeof req.body != 'undefined') {
        try {
            await UsuarioSchema.findOneAndUpdate(
                { _id: req.params.id },
                {
                    id: req.params.id,
                cedula: req.body.cedula,
                rol: req.body.rol,
                nombre: req.body.nombre,
                estado: req.body.estado
                }
            );
            res.json({ msg: 'Se ha actualizado el usuario ' + req.body.id })
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede actualizar el usuario, revisar los parametros" })
    }
}


const deleteUsuario = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let result = await UsuarioSchema.findByIdAndRemove(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Usuario no encontrado"
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
module.exports.getUsuario = getUsuario;
module.exports.getUsuarios = getUsuarios;
module.exports.createUsuario = createUsuario;
module.exports.updateUsuario = updateUsuario;
module.exports.deleteUsuario = deleteUsuario;
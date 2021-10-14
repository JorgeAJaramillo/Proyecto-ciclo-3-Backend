UsuarioSchema = require('../models/usuario')


const getUsuario = async (req, res) => {
    if (typeof req.body != 'undefined') {
        try {
            let usuario = await UsuarioSchema.findById(req.body.id);
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
                { _id: req.body.id },
                {
                cedula: req.body.cedula,
                name: req.body.nombre,
                state: req.body.estado,
                rol: req.body.rol
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
    if (typeof req.body != 'undefined') {
        try {
            await UsuarioSchema.findOneAndRemove( {_id: req.body.id} );
            res.json({ msg: 'Se ha eliminado el usuario ' + req.body.id });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        res.json({ msg: "No se puede eliminar el usuario sin el id" })
    }
}
module.exports.getUsuarios = getUsuarios;
module.exports.createUsuario = createUsuario;
module.exports.updateUsuario = updateUsuario;
module.exports.deleteUsuario = deleteUsuario;
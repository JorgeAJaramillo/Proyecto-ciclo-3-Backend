const {Router} = require('express');
const router = Router();
const { usuariosController } = require('../controllers');

router.get('/', usuariosController.getUsuarios);

router.post('/', usuariosController.createUsuario);

router.put('/', usuariosController.updateUsuario);

router.delete('/', usuariosController.deleteUsuario);

module.exports = router;
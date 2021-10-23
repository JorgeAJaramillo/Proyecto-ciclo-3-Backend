const { Router } = require('express');
const router = Router();
const { usuariosController } = require('../controllers');
const { body } = require('express-validator');

router.get('/:id', usuariosController.getUsuario);


router.get('/', usuariosController.getUsuarios);

router.post('/',
    body('cedula', 'La cédula del usuarios es requerida y debe ser numerica').exists().isNumeric(),
    body('nombre', 'El nombre del usuarios es requerido').exists()
    , usuariosController.createUsuario);  
 

    router.put('/:id',
    body('cedula', 'La cédula del usuarios es requerida y debe ser numerica').exists().isNumeric(),
    body('nombre', 'El nombre del usuarios es requerido').exists()
    , usuariosController.updateUsuario); 
 
router.delete('/:id', usuariosController.deleteUsuario);

module.exports = router;
const { Router } = require('express');
const router = Router();
const { productosController } = require('../controllers');
const { body } = require('express-validator');

router.get('/:id', productosController.getProducto);


router.get('/', productosController.getProductos);

router.post('/',
    body('valor', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('descripcion', 'La descripción del producto es requerida').exists(),
    body('estado', 'El estado del producto es requerido(true/false)').isBoolean().exists()
    , productosController.createProducto);

    router.put('/:id',
    body('valor', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('descripcion', 'La descripción del producto es requerida').exists(),
    body('estado', 'El estado del producto es requerido(true/false)').isBoolean().exists()
    , productosController.updateProducto);    

router.delete('/:id', productosController.deleteProducto);

module.exports = router;
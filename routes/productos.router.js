const {Router} = require('express');
const router = Router();
const { productosController } = require('../controllers');

router.get('/', productosController.getProductos);

router.post('/', productosController.createProducto);

router.put('/', productosController.updateProducto);

router.delete('/', productosController.deleteProducto);

module.exports = router;
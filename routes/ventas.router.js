const {Router} = require('express');
const router = Router();
const { ventasController } = require('../controllers');

router.get('/', ventasController.getVentas);

router.post('/', ventasController.createVenta);

router.put('/', ventasController.updateVenta);

router.delete('/', ventasController.deleteVenta);

module.exports = router;
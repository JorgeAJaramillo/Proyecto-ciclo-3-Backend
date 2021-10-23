const { Router } = require('express');
const router = Router();
const { ventasController } = require('../controllers');
const { body } = require('express-validator');

router.get('/:id', ventasController.getVenta);


router.get('/', ventasController.getVentas);

router.post('/', ventasController.createVenta);

    router.put('/:id', ventasController.updateVenta);    

router.delete('/:id', ventasController.deleteVenta);

module.exports = router;
const express = require('express');
const productsCtrl = require('../../controllers/v1/productsCtrl');

const router = express.Router();

router.post('/create', productsCtrl.createProduct);
router.post('/get-all', productsCtrl.getProduct);
router.post('/delete', productsCtrl.deleteProduct);

module.exports = router;

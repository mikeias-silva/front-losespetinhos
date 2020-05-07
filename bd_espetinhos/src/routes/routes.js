const express = require('express');
const router = express.Router();
const vendasController = require('../controllers/vendasController');


router.get('/vendas', vendasController.vendasHoje);

router.post('/inserirVendas', vendasController.Insert);

//router.post('/vendas', vendasController.Insert);
router.post('/oi', vendasController.Inserir);

module.exports = router;
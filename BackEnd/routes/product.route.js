const productCtrl = require('../controllers/product.controller');
const express = require('express');
const router = express.Router();

//Route to read a Product byID
router.get('/:id', productCtrl.getById);

//Route to read ALL Products
router.get('/', productCtrl.getAll);

//Route to register a Product
router.post('/', productCtrl.create);

//Route to update a Product
router.put('/:id', productCtrl.update);

//Route to delete a Product
router.delete('/:id', productCtrl.delete);

module.exports = router;
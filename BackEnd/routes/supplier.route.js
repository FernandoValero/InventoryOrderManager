const supplierCtrl = require('../controllers/supplier.controller');
const express = require('express');
const router = express.Router();

//Route to read a Supplier by ID
router.get('/:id', supplierCtrl.getById);

//Route to read all Suppliers
router.get('/', supplierCtrl.getAll);

//Route to register a Supplier
router.post('/', supplierCtrl.create);

//Route to update a Supplier
router.put('/:id', supplierCtrl.update);

//Route to delete a Supplier
router.delete('/:id', supplierCtrl.delete);

module.exports = router;
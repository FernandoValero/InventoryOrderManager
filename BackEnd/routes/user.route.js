const administratorCtrl = require('../controllers/administrator.controller');
const clientCtrl = require('../controllers/client.controller');
const ownerCtrl = require('../controllers/owner.controller');
const deliveryPersonCtrl = require('../controllers/deliveryPerson.controller');
const userCtrl = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

//Route to read ALL Users
router.get('/', userCtrl.getAll);

//Route to read a User byID
router.get('/:id', userCtrl.getById);

//Route to update a User
router.put('/:id', userCtrl.update);

//Route to delete a User
router.delete('/:id', userCtrl.delete);


//Create a new type of user 
router.post('/Client', clientCtrl.create);
router.post('/DeliveryPerson', deliveryPersonCtrl.create);
router.post('/Administrator', administratorCtrl.create);
router.post('/Owner', ownerCtrl.create);

//Login
router.post('/login', userCtrl.login);

module.exports = router;

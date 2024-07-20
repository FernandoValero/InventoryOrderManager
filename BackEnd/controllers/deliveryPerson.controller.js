const DeliveryPerson = require('../models/deliveryPerson');
const deliveryPersonCtrl = {}

//Create a new user of type delivery person
deliveryPersonCtrl.create = async (req, res) => {
    var deliveryPerson = new DeliveryPerson(req.body);
    try {
        await deliveryPerson.save();
        res.json({
            'status': '1',
            'msg': 'delivery person created'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error processing the operation',
            error
        });
    }
};

module.exports = deliveryPersonCtrl;
const Administrator = require('../models/administrator');
const administratorCtrl = {}

//Create a new user of type administrator
administratorCtrl.create = async (req, res) => {
    var administrator = new Administrator(req.body);
    try {
        await administrator.save();
        res.json({
            'status': '1',
            'msg': 'administrator created'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error processing the operation',
            error
        });
    }
};

module.exports = administratorCtrl;
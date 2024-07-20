const Owner = require('../models/owner');
const ownerCtrl = {}

//Create a new user of type owner
ownerCtrl.create = async (req, res) => {
    var owner = new Owner(req.body);
    try {
        await owner.save();
        res.json({
            'status': '1',
            'msg': 'owner created'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error processing the operation',
            error
        });
    }
};

module.exports = ownerCtrl;

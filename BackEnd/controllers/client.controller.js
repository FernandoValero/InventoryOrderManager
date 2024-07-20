const Client = require('../models/client');
const clientCtrl = {}

//Create a new user of type client
clientCtrl.create = async (req, res) => {
    var client = new Client(req.body);
    try {    
        await client.save();
        res.json({
            'status': '1',
            'msg': 'client created'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error processing the operation',
            error
        });
    }
};

module.exports = clientCtrl;
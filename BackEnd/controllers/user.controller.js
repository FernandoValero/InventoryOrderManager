const User = require('../models/user');
const userCtrl = {}

//Read ALL User
userCtrl.getAll = async (req, res) => {
    var users = await User.find();
    res.json(users);
};

//Read a User
userCtrl.getById = async (req, res) => {
    var user = await User.findById(req.params.id);
    res.json(user);
};

//Delete a User
userCtrl.delete = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'User deleted '
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error processing the operation'
        })
    }
};

//Update a User
userCtrl.update = async (req, res) => {
    const user = new User(req.body);
    try {
        await User.updateOne({ _id: req.body._id }, user);
        res.json({
            'status': '1',
            'msg': 'Modified user'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error processing the operation'
        })
    }
}

//Log in user
userCtrl.login = async (req, res) => {

    const criteria = {
        userName: req.body.userName,
        password: req.body.password
    }

    try {
        const user = await User.findOne(criteria);
        if (!user) {
            res.json({
                status: 0,
                msg: "not found"
            })
        } else {
            res.json({
                status: 1,
                msg: "success",
                userId: user._id,
                userName : user.userName,
                role: user.role
            })
        }
    } catch (error) {
            res.json({
                status: 0,
                msg: "error"
            })
    }
}

module.exports = userCtrl;
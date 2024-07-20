const Product = require('../models/product');
const productCtrl = {}

//Register a Product
productCtrl.create = async (req, res) => {
    var product = new Product(req.body);
    try {
        await product.save();
        res.json({
            'status': '1',
            'msg': 'product created'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error processing the operation',
            error
        });
    }
}

//Delete a Product
productCtrl.delete = async (req, res) => {
    try {
        await Product.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'removed product'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error processing the operation'
        })
    }
}

//Update a product
productCtrl.update = async (req, res) => {
    const product = new Product(req.body);
    try {
        await Product.updateOne({ _id: req.body._id }, product);
        res.json({
            'status': '1',
            'msg': 'modified product'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error processing the operation'
        })
    }
}

//Read ALL products
productCtrl.getAll = async (req, res) => {
    var products = await Product.find();
    res.json(products);
}

//Read a product
productCtrl.getById = async (req, res) => {
    var product = await Product.findById(req.params.id);
    res.json(product);
}


module.exports = productCtrl;

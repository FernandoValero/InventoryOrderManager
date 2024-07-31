const Product = require('../models/product');
const productCtrl = {}

//Generate number for product
async function generateNumber() {
    try {
        const lastProduct = await Product.findOne().sort({ number: -1 }).exec();
        if (!lastProduct) {
            return 'P0001';
        }
        const lastNumber = parseInt(lastProduct.number.substring(1));
        const newNumber = lastNumber + 1;
        const newProductNumber = `S${newNumber.toString().padStart(4, '0')}`;
        return newProductNumber;
    } catch (error) {
        throw new Error('error generating product number');
    }
}

//Register a Product
productCtrl.create = async (req, res) => {
    try {
        const newNumber = await generateNumber();
        var product = new Product({ ...req.body, number: newNumber });
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
    var products = await Product.find().populate('supplier');
    res.json(products);
}

//Read a product
productCtrl.getById = async (req, res) => {
    var product = await Product.findById(req.params.id).populate('supplier');
    res.json(product);
}


module.exports = productCtrl;

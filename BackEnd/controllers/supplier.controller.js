const Supplier = require('../models/supplier');
const supplierCtrl = {}

//Generate number for supplier
async function generateNumber() {
    try {
        const lastSupplier = await Supplier.findOne().sort({ number: -1 }).exec();
        if (!lastSupplier) {
            return 'S0001';
        }
        const lastNumber = parseInt(lastSupplier.number.substring(1));
        const newNumber = lastNumber + 1;
        const newSupplierNumber = `S${newNumber.toString().padStart(4, '0')}`; 
        return newSupplierNumber;
    } catch (error) {
        throw new Error('error generating supplier number');
    }
}

//Register a Supplier
supplierCtrl.create = async (req, res) => {
    try {
        const newNumber = await generateNumber();
        var supplier = new Supplier({...req.body, number: newNumber });
        await supplier.save();
        res.json({
            'status': '1',
            'msg': 'Supplier created',
            supplier
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error processing the operation',
            error
        });
    }
}

//Delete a Supplier
supplierCtrl.delete = async (req, res) => {
    try {
        await Supplier.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'removed Supplier'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error processing the operation'
        })
    }
}

//Update a Supplier
supplierCtrl.update = async (req, res) => {
    const supplier = new Supplier(req.body);
    try {
        await Supplier.updateOne({ _id: req.body._id }, supplier);
        res.json({
            'status': '1',
            'msg': 'modified Supplier'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error processing the operation'
        })
    }
}

//Read ALL Suppliers
supplierCtrl.getAll = async (req, res) => {
    var suppliers = await Supplier.find();
    res.json(suppliers);
}

//Read a Supplier
supplierCtrl.getById = async (req, res) => {
    var supplier = await Supplier.findById(req.params.id);
    res.json(supplier);
}



module.exports = supplierCtrl;

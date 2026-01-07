const productService = require("../services/productService");
// const logger = require('../logger');

exports.getAllProducts = async (req, res) => {
    try {
        // logger.info(`User: ${req.user.id} Method:${req.method} Endpoint:${req.originalUrl}`)


        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const products = await productService.getAllProducts(page, limit);

        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ error: "Cant get all product" })
    }
}

exports.createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json({
            message: "Product Added Successfully",
            product: product,
        })

    } catch (err) {
        if (err.name === "ValidationError") {
            console.log(Object.values(err.errors).map(e => e.message))
        }
        res.status(500).json({ error: "Inserting Error" })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const id = String(req.params.id);
        const updatedData = req.body;

        const updated = await productService.updateProduct(id, updatedData)
        res.status(200).json({ message: "Product Update Successfully", product: updated })
    }
    catch (err) {
        res.status(500).json({ err: "Fail to update product" })
    }
}

exports.findProduct = async (req, res) => {
    try {
        const id = String(req.params.id);

        const findSingleProduct = await productService.findProduct(id);

        res.status(200).json({ message: "Fetch Successfully", product: findSingleProduct })
    }
    catch (err) {
        if (err.message === "Product not found") {
            return res.status(404).json({ message: err.message });
        }
        res.status(500).json({ message: "Fail to fetch" })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const id = String(req.params.id);
        await productService.deleteProduct(id);
        res.status(200).json("Product delete Successfully");
    }
    catch (err) {
        res.status(500).json({ message: "Fail to delete product" })
    }
}
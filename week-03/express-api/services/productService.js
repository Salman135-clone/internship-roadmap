const product = require("../models/productModal")

exports.getAllProducts = async (page, limit) => {

    const skip = (page - 1) * limit;

    const products = await product.find().skip(skip).limit(limit);


    const totalRecord = await product.countDocuments();

    const totalPage = Math.ceil(totalRecord / limit);

    return { products, totalRecord, page, limit, totalPage };
}

exports.createProduct = async (data) => {
    const newProduct = await product.create(data);
    return newProduct;
}

exports.updateProduct = async (id, data) => {
    const updatedResult = await product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    return updatedResult;
}

exports.findProduct = async (id) => {
    const fetchProduct = await product.findById(id);
    if (!fetchProduct) {
        throw new Error("Product not found");
    }
    return fetchProduct;
}

exports.deleteProduct = async (id) => {
    return await product.findByIdAndDelete(id);
}
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { protect } = require("../middlewares/authMiddleware");
const {
  productCreateSchema,
} = require("../middlewares/validation/productValidate");
const validate = require("../middlewares/validation/validate");

router.get("/product", protect, productController.getAllProducts);

router.post(
  "/product",
  protect,
  validate(productCreateSchema),
  productController.createProduct
);

router.patch("/product/:id", productController.updateProduct);

router.get("/product/:id", productController.findProduct);

router.delete("/product/:id", productController.deleteProduct);

module.exports = router;

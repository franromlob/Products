const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  averageProduct,
} = require("../controllers/productControllers");

router.get("/average", averageProduct);

router.get("/", getProducts);
router.post("/", createProduct);

router.get("/:id", getProductById);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;

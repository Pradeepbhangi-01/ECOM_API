// this file is to handle all the api controllers of product

import express from "express";
import ProductController from "./product.controller.js";
import { upload } from "../../middleware/file.middleware.js";

const productRouter = express.Router();

const productController = new ProductController();

// all the paths to controller methods
productRouter.get("/", productController.getAllProducts);

// to rate the product
productRouter.post("/rate", productController.rateProduct);

// To filter the the products we use query
// http://localhost:4000/api/products/filter?minPrice=10&maxPrice=20&category=category1
productRouter.get("/filter", productController.filterproducts);
productRouter.post(
  "/",
  upload.single("imageUrl"),
  productController.addProduct
);
productRouter.get("/:id", productController.getOneProduct);
export default productRouter;

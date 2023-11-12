// this file is to handle all the api controllers of product

import express from "express";
import ProductController from "./product.controller.js";

const productRouter = express.Router();

const productController = new ProductController();

// all the paths to controller methods
productRouter.get("/", productController.getAllProducts);
productRouter.post("/", productController.addProduct);
export default productRouter;

import ProductModel from "./product.model.js";

export default class Productmodel {
  getAllProducts(req, res) {
    const products = ProductModel.GetAll();
    res.status(200).send(products);
  }

  addProduct(req, res) {}

  rateProduct(req, res) {}
  getOneProduct(req, res) {}
}

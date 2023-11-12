import express from "express";
import ProductRouter from "./src/features/product/product.routes.js";

const app = express();

//for all request related to product redirect to the product routes

app.use("/api/products", ProductRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Rest APIs");
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});

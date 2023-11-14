import express from "express";
import bodyParser from "body-parser";
import ProductRouter from "./src/features/product/product.routes.js";
import UserRouter from "./src/features/user/user.routes.js";
import jwtAuth from "./src/middleware/jwt.middleware.js";

const app = express();

// for post request to handle them in server side we use body-parser
app.use(bodyParser.json());
//for all request related to product redirect to the product routes
app.use("/api/products", jwtAuth, ProductRouter);
app.use("/api/users", UserRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Rest APIs");
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});

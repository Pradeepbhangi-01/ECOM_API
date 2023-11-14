import express from "express";
import { UserController } from "./user.controller.js";

const userRoute = express.Router();

const userController = new UserController();

userRoute.post("/signup", userController.signUp);
userRoute.post("/signin", userController.signIn);
userRoute.get("/users", userController.getAllUsers);

export default userRoute;

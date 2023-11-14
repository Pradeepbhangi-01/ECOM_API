import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export class UserController {
  signUp(req, res) {
    const { name, email, password, type } = req.body;
    const user = UserModel.signUp(name, email, password, type);
    res.sendStatus(201).send(user);
  }

  signIn(req, res) {
    const user = UserModel.signIn(req.body.email, req.body.password);
    if (!user) {
      res.status(400).send("User not found");
    } else {
      // Jwt will be created inside the sign in

      //1.create token
      const token = jwt.sign(
        { userID: user.id, email: user.email },
        "wfzJalxAo2qSMjzEP1aCxHFJzV3Urv3c",
        {
          expiresIn: "1h",
        }
      );

      //2. send the token
      res.status(200).send(token);
    }
  }

  getAllUsers(req, res) {
    const users = UserModel.getAllUsers();
    res.status(200).send(users);
  }
}

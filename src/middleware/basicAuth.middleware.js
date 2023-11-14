import UserModel from "../features/user/user.model.js";

const basicAuthorizer = (req, res, next) => {
  //1. Check if the autorization header is empty

  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    res.status(401).send("authorization is not found");
  }

  //2 . Extract credentials. [Basic 2eni3inn894y8d9838d93ub83bhsjs]
  const base64Credentials = authHeader.replace("Basic ", "");
  console.log(base64Credentials);

  //3 . Decode the base64

  const decodedCreds = Buffer.from(base64Credentials, "base64").toString(
    "utf-8"
  );
  console.log(decodedCreds); //[username:password]
  const creds = decodedCreds.split(":");

  //4. check the user is present or not from the model getalluser
  const user = UserModel.getAllUsers().find(
    (u) => u.email == creds[0] && u.password == creds[1]
  );
  if (user) {
    next();
  } else {
    res.status(401).send("Invalid credentials");
  }
};

export default basicAuthorizer;

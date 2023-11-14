import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  //1.Read the token from the headers

  const token = req.headers["authorization"];

  //2. if no token return the error
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  //3. verify the token
  try {
    const payload = jwt.verify(token, "wfzJalxAo2qSMjzEP1aCxHFJzV3Urv3c");
  } catch (error) {
    console.log(error);
    // 4.return error
    return res.status(401).send("Unauthorized");
  }

  // call next function
  next();
};

export default jwtAuth;

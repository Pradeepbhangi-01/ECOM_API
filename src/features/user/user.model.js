export default class UserModel {
  constructor(name, email, password, type, id) {
    (this.name = name),
      (this.email = email),
      (this.password = password),
      (this.type = type),
      (this.id = id);
  }

  static signUp(name, email, password, type) {
    const newUser = new UserModel(name, email, password, type);
    newUser.id = users.length + 1;
    const user = users.push(newUser);
    return user;
  }

  static signIn(email, password) {
    const result = users.find(
      (u) => u.email == email && u.password == password
    );
    return result;
  }

  static getAllUsers() {
    return users;
  }
}

var users = [
  {
    id: 1,
    name: "seller 1",
    email: "seller@ecom.com",
    password: "Password1",
    type: "seller",
  },
  {
    id: 2,
    name: "Customer1",
    email: "customer@ecom.com",
    password: "Password2",
    type: "customer",
  },
];

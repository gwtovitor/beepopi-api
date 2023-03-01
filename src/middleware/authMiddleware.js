import bcrypt from "bcrypt";

import userService from "../service/userService.js";

const encryptPassword = (req, res, next) => {
  try {
    const password = req.body.password;

    req.body.password = bcrypt.hashSync(password, 10);

    next();
  } catch (err) {
    res.status(500).send({ message: err })
  }
};

const verifyLogin = async (req, res, next) => {
  const { login, password } = req.body;

  const user = await userService.findByUsername(login);

  !user || user === null ? res.status(404).send({ message: "Usuario ou Senha invalidos." }) : null;

  !bcrypt.compareSync(password, user.password) ? res.status(404).send({ message: "Usuario ou Senha invalidos." }) : req.user = user;

  next();
};

export default {
  encryptPassword,
  verifyLogin
};
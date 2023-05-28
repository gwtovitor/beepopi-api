import { findUserById } from "../service/userService.js";

const verifyUserToSave = (req, res, next) => {
  try {
    const { email, username, password } = req.body;

    (!email || !username || !password) ? res.status(400).send({ message: "Todos os campos devem ser preenchidos" }) : next();
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const verifyUserToLogin = (req, res, next) => {
  try {
    const { login, password } = req.body;

    (!login || !password) ? res.status(400).send({ message: "Todos os campos devem ser preenchidos" }) : next();
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const verifyUserId = (req, res, next) => {
  const user = findUserById(req.params.id);

  !user ? res.status(404).send({ message: "Usuário nao encontrado" }) : next();
}

export default {
  verifyUserToSave,
  verifyUserToLogin,
  verifyUserId
};